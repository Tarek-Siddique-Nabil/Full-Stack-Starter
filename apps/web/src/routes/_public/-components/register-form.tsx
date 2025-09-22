import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import * as v from "valibot";
import { authClient } from "@/clients/authClient";
import FormFieldInfo from "@/routes/-components/common/form-field-info";
import Spinner from "@/routes/-components/common/spinner";

const FormSchema = v.pipe(
  v.object({
    name: v.pipe(
      v.string(),
      v.minLength(2, "Name must be at least 2 characters")
    ),
    email: v.pipe(v.string(), v.email("Please enter a valid email address")),
    password: v.pipe(
      v.string(),
      v.minLength(8, "Password must be at least 8 characters")
    ),
    confirmPassword: v.string(),
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["confirmPassword"]],
      (input) => input.password === input.confirmPassword,
      "The two passwords do not match."
    ),
    ["confirmPassword"]
  )
);

export default function RegisterCredentialsForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onChange: FormSchema,
    },
    onSubmit: async ({ value }) => {
      const { error } = await authClient.signUp.email(
        {
          name: value.name,
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            navigate({ to: "/" });
          },
        }
      );
      if (error) {
        toast.error(error.message ?? JSON.stringify(error));
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div>
        <form.Field
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Full Name</Label>
              <Input
                className="mt-1"
                id={field.name}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="text"
                value={field.state.value}
              />
              <FormFieldInfo field={field} />
            </>
          )}
          name="name"
        />
      </div>
      <div>
        <form.Field
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Email</Label>
              <Input
                className="mt-1"
                id={field.name}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                type="email"
                value={field.state.value}
              />
              <FormFieldInfo field={field} />
            </>
          )}
          name="email"
        />
      </div>
      <div>
        <form.Field
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Password</Label>
              <div className="relative flex w-full items-center justify-end">
                <Input
                  className="mt-1"
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type={isPasswordVisible ? "text" : "password"}
                  value={field.state.value}
                />
                <Button
                  className="absolute mr-2 h-7 w-7 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                  size="icon"
                  tabIndex={-1}
                  type="button"
                  variant="ghost"
                >
                  {isPasswordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                </Button>
              </div>
              <FormFieldInfo field={field} />
            </>
          )}
          name="password"
        />
      </div>
      <div>
        <form.Field
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Confirm Password</Label>
              <div className="relative flex w-full items-center justify-end">
                <Input
                  className="mt-1"
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  value={field.state.value}
                />
                <Button
                  className="absolute mr-2 h-7 w-7 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
                  }}
                  size="icon"
                  tabIndex={-1}
                  type="button"
                  variant="ghost"
                >
                  {isConfirmPasswordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                </Button>
              </div>
              <FormFieldInfo field={field} />
            </>
          )}
          name="confirmPassword"
        />
      </div>
      <form.Subscribe
        children={([canSubmit, isSubmitting]) => (
          <Button className="mt-3 h-12" disabled={!canSubmit} type="submit">
            {isSubmitting ? <Spinner /> : "Register"}
          </Button>
        )}
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      />
    </form>
  );
}
