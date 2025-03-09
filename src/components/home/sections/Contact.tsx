"use client";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { contactFormSchema, ContactFormValues } from "@/lib/validation/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Loader2, SendIcon } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import arrowPic from "@/../public/shapes/arrow.svg";

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        reset();
        toast({
          title: "Email sent successfully!",
          description: "I will get back to you as soon as possible.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "Please try again later.",
      });
    }
  };

  return (
    <section id="contact">
      <SectionHeading title="Contact" />
      <div className="relative">
        <div className="bg-dots z-[-1]" />
        <div className="container">
          <div className="py-14">
            <div className="flex items-center justify-center pb-10 text-center max-sm:flex-col sm:gap-3">
              <div className="text-pretty">
                <SectionHeading
                  className="max-sm:text-2xl"
                  title={"Let's work together 🎉"}
                  el="h3"
                />

                <p className="text-muted-foreground sm:text-lg">
                  I&apos;m open to exciting opportunities. Let&apos;s connect!
                  <br />
                  Have an idea or project? Let&apos;s discuss how we can work
                  together!
                </p>
              </div>

              <Image
                src={arrowPic}
                alt="arrow"
                className="rotate-[-22deg] sm:translate-y-3 sm:self-stretch"
              />
            </div>

            <div className="flex flex-col flex-wrap items-center md:flex-row">
              <div className="basis-1/2 max-sm:mb-3">
                <DotLottieReact
                  src={"/lottie-files/contact.lottie"}
                  loop
                  autoplay
                  className="relative z-10 w-full max-w-3xl"
                />
              </div>
              <div className="w-full basis-1/2">
                <Form {...form}>
                  <form
                    noValidate
                    className="mx-auto max-w-md space-y-3 rounded-lg border bg-card px-3 py-6 transition-all duration-300 hover:[box-shadow:0_0_5px_-2px_hsl(var(--foreground)_/_0.7)] md:px-6"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <h3 className="get-in-touch text-center text-2xl font-bold">
                      Get in touch
                    </h3>
                    <FormField
                      control={control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              {...field}
                              placeholder="E-mail"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="max-h-64"
                              placeholder="Write your message..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="pt-5">
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        className={cn(
                          "w-full transition-all duration-500 active:scale-95",
                          isSubmitting
                            ? "animate-bounce duration-1000"
                            : "hover:scale-105",
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            Sending... <Loader2 className="animate-spin" />
                          </>
                        ) : (
                          <>
                            Send <SendIcon />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
