import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'process.env.NEXT_PUBLIC_AWS_ACCESS_KEY',
  secretAccessKey: 'process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY',
  region: 'process.env.NEXT_PUBLIC_REGION',
});

const cloudwatch = new AWS.CloudWatch();

export function publishChatBotMessagesMetric(botName) {
  const params = {
    MetricData: [
      {
        MetricName: 'ChatBotMessages',
        Dimensions: [
          {
            Name: 'BotName',
            Value: botName,
          },
        ],
        Unit: 'Count',
        Value: 1,
      },
    ],
    Namespace: 'YourNamespace',
  };

  cloudwatch.putMetricData(params, (err, data) => {
    if (err) {
      console.error('Error publishing metric data:', err);
    } else {
      console.log('Successfully published metric data:', data);
    }
  });
}
