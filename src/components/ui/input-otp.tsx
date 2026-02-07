"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { cn } from "./utils";

interface InputOTPProps extends React.ComponentPropsWithoutRef<typeof OTPInput> {
  containerClassName?: string;
}

function InputOTP({ 
  className, 
  containerClassName, 
  ...props 
}: InputOTPProps) {
  return (
    <OTPInput
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ 
  className, 
  ...props 
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div 
      className={cn("flex items-center", className)} 
      {...props} 
    />
  );
}

interface InputOTPSlotProps extends React.ComponentPropsWithoutRef<"div"> {
  index: number;
}

function InputOTPSlot({ 
  index, 
  className, 
  ...props 
}: InputOTPSlotProps) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const slot = inputOTPContext?.slots[index];
  
  const { char, hasFakeCaret, isActive } = slot ?? {};

  return (
    <div
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ 
  className,
  ...props 
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div 
      role="separator" 
      className={cn("flex items-center", className)}
      {...props}
    >
      <MinusIcon className="h-4 w-4" />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };