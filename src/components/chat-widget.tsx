import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import logoAsset from "@/assets/khan-tours-logo.jpeg.asset.json";

const SUGGESTIONS = [
  "Which car is best for a family of 6?",
  "What is the price for 3 days?",
  "Do you provide a driver?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (err) =>
      setError(
        err.message ||
          "Sorry, the assistant is unavailable right now. Please call +92 321 4067150."
      ),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!busy) textareaRef.current?.focus();
  }, [busy]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || busy) return;
    setError(null);
    setInput("");
    void sendMessage({ text: value });
  };

  return (
    <>
      {open && (
        <div className="fixed inset-x-3 bottom-3 z-[60] flex h-[70vh] max-h-[560px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[380px]">
          <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-3">
            <img
              src={logoAsset.url}
              alt="KHAN MOTORS & TOURS logo"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-primary"
            />
            <div className="leading-tight">
              <p className="font-display text-sm font-bold">Khan Booking Assistant</p>
              <p className="text-xs text-muted-foreground">Cars, tours & prices — 24/7</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="ml-auto rounded-md p-1.5 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <Conversation className="flex-1">
            <ConversationContent className="gap-3">
              {messages.length === 0 && (
                <div className="space-y-3 py-2">
                  <p className="text-sm text-muted-foreground">
                    Hi! Ask me about our cars, daily rates or tour packages.
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="rounded-lg border border-border bg-background px-3 py-2 text-left text-xs font-medium text-foreground transition-colors hover:border-primary/60"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => {
                const text = message.parts
                  .map((part) => (part.type === "text" ? part.text : ""))
                  .join("");
                if (!text) return null;
                return (
                  <Message from={message.role} key={message.id}>
                    <MessageContent
                      className={
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-transparent p-0 text-foreground"
                      }
                    >
                      <MessageResponse>{text}</MessageResponse>
                    </MessageContent>
                  </Message>
                );
              })}

              {status === "submitted" && (
                <Shimmer className="text-sm">Thinking...</Shimmer>
              )}

              {error && (
                <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  {error}
                </p>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <div className="border-t border-border p-3">
            <PromptInput
              onSubmit={(_message, event) => {
                event.preventDefault();
                send(input);
              }}
            >
              <PromptInputTextarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about cars, prices or tours..."
              />
              <PromptInputFooter className="justify-end">
                <PromptInputSubmit status={status} disabled={!input.trim() || busy} />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat assistant"}
        className="fixed right-5 bottom-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}
