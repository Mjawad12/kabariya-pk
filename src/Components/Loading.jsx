"use client";
import React from "react";

function Loading() {
  return (
    <div className="flex gap-2 mt-10">
      <div class="h-5 w-5 bg-primaryGreen rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-5 w-5 bg-primaryGreen rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div class="h-5 w-5 bg-primaryGreen rounded-full animate-bounce"></div>
    </div>
  );
}

export default Loading;
