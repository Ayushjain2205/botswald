import { useRef, useState, useEffect, useMemo } from 'react';
import styles from '@/styles/Home.module.css';
import { Message } from '@/types/chat';
import { fetchEventSource } from '@microsoft/fetch-event-source';
import ReactMarkdown from 'react-markdown';
import LoadingDots from '@/components/ui/LoadingDots';

interface ChatProps {
  width?: number;
  height?: number;
}

export default function ChatBot({ width, height }: ChatProps) {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [messageState, setMessageState] = useState<{
    messages: Message[];
    pending?: string;
    history: [string, string][];
  }>({
    messages: [
      {
        message:
          'Hi there its the Health man! What would like to know about health and wellness?',
        type: 'apiMessage',
      },
    ],
    history: [],
  });

  const { messages, pending, history } = messageState;

  const messageListRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  //handle form submission
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!query) {
      alert('Please input a question');
      return;
    }

    const question = query.trim();

    setMessageState((state) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          type: 'userMessage',
          message: question,
        },
      ],
      pending: undefined,
    }));

    setLoading(true);
    setQuery('');
    setMessageState((state) => ({ ...state, pending: '' }));

    const ctrl = new AbortController();

    try {
      fetchEventSource('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          history,
        }),
        signal: ctrl.signal,
        onmessage: (event) => {
          if (event.data === '[DONE]') {
            setMessageState((state) => ({
              history: [...state.history, [question, state.pending ?? '']],
              messages: [
                ...state.messages,
                {
                  type: 'apiMessage',
                  message: state.pending ?? '',
                },
              ],
              pending: undefined,
            }));
            setLoading(false);
            ctrl.abort();
          } else {
            const data = JSON.parse(event.data);
            setMessageState((state) => ({
              ...state,
              pending: (state.pending ?? '') + data.data,
            }));
          }
        },
      });
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  }

  //prevent empty submissions
  const handleEnter = (e: any) => {
    if (e.key === 'Enter' && query) {
      handleSubmit(e);
    } else if (e.key == 'Enter') {
      e.preventDefault();
    }
  };

  const chatMessages = useMemo(() => {
    return [
      ...messages,
      ...(pending ? [{ type: 'apiMessage', message: pending }] : []),
    ];
  }, [messages, pending]);

  return (
    <div
      className={`w-[1152px] ${
        height ? `h-[${height}px]` : 'h-[800px]'
      } border-2 border-black rounded-[4px] flex flex-col`}
    >
      <div className="flex-grow overflow-y-scroll">
        <div ref={messageListRef} className={styles.messagelist}>
          {chatMessages.map((message, index) => {
            let icon;
            let className;
            if (message.type === 'apiMessage') {
              icon = (
                <img
                  src="mascot.svg"
                  alt="AI"
                  width="40"
                  height="40"
                  className={styles.boticon}
                />
              );
              className = styles.apimessage;
            } else {
              icon = (
                <img
                  src="/usericon.png"
                  alt="Me"
                  width="30"
                  height="30"
                  className={styles.usericon}
                />
              );
              // The latest message sent by the user will be animated while waiting for a response
              className =
                loading && index === chatMessages.length - 1
                  ? styles.usermessagewaiting
                  : styles.usermessage;
            }
            return (
              <div key={index} className={className}>
                {icon}
                <div className={styles.markdownanswer}>
                  <ReactMarkdown linkTarget="_blank">
                    {message.message}
                  </ReactMarkdown>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[1084px] flex flex-col gap-[10px] flex-end self-center mb-[30px] mt-[20px] ">
        <div className={styles.cloudform}>
          <form onSubmit={handleSubmit}>
            <textarea
              disabled={loading}
              onKeyDown={handleEnter}
              ref={textAreaRef}
              autoFocus={false}
              rows={1}
              maxLength={512}
              id="userInput"
              name="userInput"
              placeholder={
                loading
                  ? 'Waiting for response...'
                  : 'How does bad sleep cycle affect the body?'
              }
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.textarea}
            />
            <button
              type="submit"
              disabled={loading}
              className={styles.generatebutton}
            >
              {loading ? (
                <div className={styles.loadingwheel}>
                  <LoadingDots color="#000" />
                </div>
              ) : (
                // Send icon SVG in input field
                <svg
                  viewBox="0 0 20 20"
                  className={styles.svgicon}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              )}
            </button>
          </form>
        </div>
        <div className="flex flex-row gap-[14px]">
          <span
            className="text-[24px] italic bg-[#F4F2F2] h-[32px] px-[10px] rounded-[2px] cursor-pointer"
            onClick={() => {
              const value = 'recommend supplements for low Vitamin D';
              setQuery(value);
            }}
          >
            recommend supplements for low Vitamin D
          </span>
          <span
            className="text-[24px] italic bg-[#F4F2F2] h-[32px] px-[10px] rounded-[2px] cursor-pointer"
            onClick={() => {
              const value = 'what medicine to take to not have a hangover?';
              setQuery(value);
            }}
          >
            what medicine to take to not have a hangover?
          </span>
        </div>
      </div>
    </div>
  );
}
