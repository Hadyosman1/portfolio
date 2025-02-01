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
import { zodResolver } from "@hookform/resolvers/zod";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Loader2, SendIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { contactFormSchema, ContactFormValues } from "@/lib/validation/contact";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

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
        headers: {
          "Content-Type": "application/json",
        },
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
    <section id="contact" className="container">
      <SectionHeading title="Contact" />

      <div className="flex flex-col flex-wrap items-center pb-14 pt-6 md:flex-row">
        <div className="basis-1/2">
          <DotLottieReact
            src={"/lottie-files/contact.lottie"}
            loop
            autoplay
            className="w-full max-w-3xl"
          />
        </div>
        <div className="w-full basis-1/2">
          <Form {...form}>
            <form
              noValidate
              className="bg-noise mx-auto max-w-md space-y-3 rounded-lg px-3 py-6 shadow ring-1 ring-border/50 transition-all duration-300 hover:drop-shadow-[0_0_25px_hsl(var(--active-link-color)_/_0.5)] md:px-6"
              onSubmit={handleSubmit(onSubmit)}
            >
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
                      <Input type="email" {...field} placeholder="E-mail" />
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
    </section>
  );
};

export default Contact;
