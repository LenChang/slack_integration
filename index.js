const { IncomingWebhook } = require("@slack/webhook");
const config = require("config");

// Read a url from the environment variables
const weather_channel_url = config.get("CHANNEL.WEATHER_URL");

// Initialize
const webhook_weather = new IncomingWebhook(weather_channel_url);

// Send the notification
(async () => {
  await webhook_weather.send({
    text: "hihi, fucccccccccccccccccck you. it's weather genie",
  });
})();
