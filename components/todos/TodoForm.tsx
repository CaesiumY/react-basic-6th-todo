"use client";

import { useAddTodoMutation } from "@/query/useTodoMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "2글자 이상 입력해주세요",
    })
    .max(50),
});

const TodoForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { mutateAsync: addTodo } = useAddTodoMutation();

  const onSubmitTodo = async (values: z.infer<typeof formSchema>) => {
    const { title } = values;

    if (!title) return;

    await addTodo(title);

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitTodo)}
        className="flex flex-col gap-2 bg-[#f5f5f5] rounded-2xl p-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="할 일을 입력해주세요"
                  {...field}
                  className="bg-transparent border-none"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-right">
          <Button type="submit" className="w-fit">
            <SendHorizontal size={16} className="mr-2" />
            추가
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TodoForm;
