"use client";
import React, {
  useMemo,
  type ReactNode,
  useRef,
  forwardRef,
  type ForwardedRef,
  useImperativeHandle,
} from "react";

import { type IconProp, type IconName } from "~/components/icons";
import { useSelectModelValue } from "~/components/input/select/hooks";
import { type MultiValueRendererProps } from "~/components/input/select/MultiValueRenderer";
import * as types from "~/components/input/select/types";
import { type ComponentProps } from "~/components/types";

import { BasicSelect, type BasicSelectProps } from "../generic/BasicSelect";
import { type BasicSelectInputInstance } from "../generic/BasicSelectInput";

import { DataSelectInput } from "./DataSelectInput";

export interface DataSelectBaseInstance {
  readonly focusInput: () => void;
}

export interface DataSelectBaseProps<
  M extends types.DataSelectModel,
  O extends types.DataSelectOptions<M>,
> extends Omit<
      BasicSelectProps,
      "content" | "onClear" | "renderedValue" | "showPlaceholder" | "inputRef"
    >,
    Pick<
      MultiValueRendererProps<M>,
      | "chipClassName"
      | "badgeProps"
      | "chipSize"
      | "onBadgeClose"
      | "getBadgeIcon"
      | "getBadgeProps"
      | "maximumValuesToRender"
    > {
  readonly options: O;
  readonly value?: types.DataSelectValue<M, O>;
  readonly initialValue?: types.DataSelectValue<M, O>;
  readonly menuClassName?: ComponentProps["className"];
  readonly inputClassName?: ComponentProps["className"];
  readonly closeMenuOnSelect?: boolean;
  readonly data: M[];
  readonly isClearable?: boolean;
  readonly chipsCanDeselect?: boolean;
  readonly showIconsInChips?: boolean;
  readonly onClear?: types.IfDeselectable<O["behavior"], () => void>;
  readonly modelValueRenderer?: (m: M) => JSX.Element;
  readonly valueRenderer?: types.DataSelectValueRenderer<M, O>;
  readonly getModelLabel?: (m: M) => ReactNode;
  readonly getModelId?: (m: M) => string | number | undefined;
  readonly getModelValueLabel?: (m: M) => ReactNode;
  readonly getModelIcon?: (datum: M) => IconProp | IconName | JSX.Element | undefined;
  readonly onChange?: types.DataSelectChangeHandler<M, O>;
  readonly content: types.DataSelectManagedCallback<JSX.Element, M, O>;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const LocalDataSelectBase = forwardRef<types.SelectInstance, DataSelectBaseProps<any, any>>(
  <M extends types.DataSelectModel, O extends types.DataSelectOptions<M>>(
    {
      options,
      menuOffset = { mainAxis: 2 },
      menuPlacement,
      closeMenuOnSelect,
      menuWidth = "target",
      isLoading,
      inPortal,
      menuClassName,
      inputClassName,
      maxHeight = 240,
      initialValue,
      value: _propValue,
      isReady,
      data,
      onClear: _onClear,
      isClearable,
      chipsCanDeselect: _chipsCanDeselect,
      showIconsInChips = true,
      children,
      content,
      onChange,
      onOpen,
      onClose,
      onOpenChange,
      getModelIcon,
      getBadgeIcon,
      ...props
    }: DataSelectBaseProps<M, O>,
    ref: ForwardedRef<types.SelectInstance>,
  ): JSX.Element => {
    const innerRef = useRef<Omit<types.SelectInstance, "focusInput"> | null>(null);
    const innerInputRef = useRef<BasicSelectInputInstance | null>(null);

    useImperativeHandle(ref, () => ({
      focusInput: () => innerInputRef.current?.focus(),
      setOpen: (v: boolean) => innerRef.current?.setOpen(v),
      setLoading: (v: boolean) => innerRef.current?.setLoading(v),
    }));

    const { value, clear, ...managed } = useSelectModelValue<M, O>({
      initialValue,
      __private_controlled_value__: _propValue,
      options,
      data,
      isReady,
      onChange,
      onSelect: () => {
        if (
          closeMenuOnSelect ||
          (closeMenuOnSelect === undefined && options.behavior !== types.SelectBehaviorTypes.MULTI)
        ) {
          innerRef.current?.setOpen(false);
        }
      },
    });

    const defaultChipsCanDeselect =
      options.behavior === types.SelectBehaviorTypes.MULTI ? true : false;
    const chipsCanDeselect = _chipsCanDeselect ?? defaultChipsCanDeselect;

    const onClear = useMemo(() => {
      if ((_onClear || isClearable) && value !== types.NOTSET) {
        return () => {
          _onClear?.();
          clear();
        };
      }
      return undefined;
    }, [isClearable, value, _onClear, clear]);

    return (
      <BasicSelect
        ref={instance => {
          if (instance) {
            innerRef.current = instance;
            if (typeof ref === "function") {
              ref(instance);
            } else if (ref) {
              ref.current = instance;
            }
          }
        }}
        maxHeight={maxHeight}
        isReady={isReady}
        isLoading={isLoading}
        menuPlacement={menuPlacement}
        menuWidth={menuWidth}
        menuClassName={menuClassName}
        inPortal={inPortal}
        menuOffset={menuOffset}
        onOpen={onOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        content={content(value, { ...managed, clear } as Omit<
          types.ManagedSelectModelValue<M, O>,
          "value"
        >)}
      >
        {children ??
          (({ ref, params, isOpen, isLoading: _isLoading }) => (
            <DataSelectInput<M, O>
              {...params}
              {...props}
              getBadgeIcon={showIconsInChips ? getModelIcon ?? getBadgeIcon : undefined}
              isDisabled={props.isDisabled || managed.modelValue === types.NOTSET}
              options={options}
              value={value}
              isOpen={isOpen}
              isLoading={_isLoading}
              ref={ref}
              inputRef={innerInputRef}
              onClear={onClear as types.IfDeselectable<O["behavior"], () => void>}
              modelValue={managed.modelValue}
              className={inputClassName}
              onBadgeClose={chipsCanDeselect ? (m: M) => managed.deselectModel(m) : undefined}
            />
          ))}
      </BasicSelect>
    );
  },
);

export const DataSelectBase = LocalDataSelectBase as {
  <M extends types.DataSelectModel, O extends types.DataSelectOptions<M>>(
    props: DataSelectBaseProps<M, O> & {
      readonly ref?: ForwardedRef<types.SelectInstance>;
    },
  ): JSX.Element;
};