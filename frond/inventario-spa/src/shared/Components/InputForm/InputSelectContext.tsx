import { RegisterOptions, useFormContext } from "react-hook-form";

export class InputSelectOptions {
  value?: string;
  title?: string;
}

interface PropsInputSelect {
  title: string;
  options?: InputSelectOptions[];
  name: string;
  validations?: RegisterOptions;
  order?: string;
  onSelectChange?: (selectedValue: string) => void;
  classNameI?: string;
  value?: string;
}

const InputSelectContext = (props: PropsInputSelect) => {
  const StyleInput =
    "border-gray-300 focus:outline-none dark:bg-gray-900 duration-200 transition-all dark:border-none left-0 relative focus:border-blue-500 focus:ring-blue-500 focus:ring-1 ring-0 w-full border rounded-md pl-2 text-ms py-2 space-x-0";
  const StyleInputError =
    "border-red-500 focus:outline-none left-0 relative duration-200 transition-all focus:border-red-500 focus:ring-red-500 focus:ring-1 ring-0 w-full border rounded-md pl-1 text-ms py-1.5 space-x-0";

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`text-xm  ${props.classNameI}`}>
      <label
        htmlFor={props.title}
        className={
          errors[props.name]
            ? "w-full text-red-600 my-auto  text-w flex  flex-col text-sm gap-2"
            : "w-full text-gray-600 dark:text-gray-300 my-auto flex flex-col text-sm gap-2"
        }
      >
        <p className=" dark:text-white"> {props.title} </p>
        <select
          disabled={props.options?.length === 0}
          className={errors[props.name!] ? StyleInputError : StyleInput}
          {...register(props.name!, props.validations)}
        >
          {props.options &&
            props.options.map((el, key) => {
              return (
                <option key={key} value={el.value}>
                  {el.title}
                </option>
              );
            })}
        </select>
        {errors![props.name] && errors![props.name]!.type === "required" && (
          <span className="text-red-600 text-[10px]">
            El Campo {props.title.toLowerCase()} es requerido.
          </span>
        )}
      </label>
    </div>
  );
};

export default InputSelectContext;
