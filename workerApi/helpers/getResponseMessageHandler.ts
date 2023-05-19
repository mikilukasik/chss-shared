import { Conversations, MessagePayload } from "../apiTypes.js";

export const getResponseMessageHandler =
  ({
    handlerKey,
    conversations,
  }: {
    handlerKey: "resolve" | "reject";
    conversations: Conversations;
  }) =>
  ({ id, data }: MessagePayload) => {
    const conversation = conversations[id];
    delete conversations[id];

    conversation[handlerKey](data);
  };
