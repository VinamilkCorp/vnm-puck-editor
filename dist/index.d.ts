import { U as UiState, D as Data, A as AppState, F as Field, a as FieldProps, C as Config, b as DefaultRootProps, I as ItemSelector, c as DropZoneProps, V as Viewports, d as DefaultComponentProps, M as MappedItem, R as RootDataWithProps, e as RootData, f as ComponentData } from './Config-15f751a4.js';
export { q as Adaptor, p as ArrayField, l as ArrayState, B as BaseData, m as BaseField, i as ComponentConfig, g as Content, s as CustomField, r as ExternalField, E as ExternalFieldWithAdaptor, t as Fields, k as ItemWithId, N as NumberField, O as ObjectField, P as PuckComponent, h as PuckContext, o as RadioField, j as RootDataWithoutProps, S as SelectField, T as TextField, n as TextareaField } from './Config-15f751a4.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, ReactElement, CSSProperties, SyntheticEvent } from 'react';
import { DragStart, DragUpdate } from '@measured/dnd';

type InsertAction = {
    type: "insert";
    componentType: string;
    destinationIndex: number;
    destinationZone: string;
};
type DuplicateAction = {
    type: "duplicate";
    sourceIndex: number;
    sourceZone: string;
};
type ReplaceAction = {
    type: "replace";
    destinationIndex: number;
    destinationZone: string;
    data: any;
};
type ReorderAction = {
    type: "reorder";
    sourceIndex: number;
    destinationIndex: number;
    destinationZone: string;
};
type MoveAction = {
    type: "move";
    sourceIndex: number;
    sourceZone: string;
    destinationIndex: number;
    destinationZone: string;
};
type RemoveAction = {
    type: "remove";
    index: number;
    zone: string;
};
type SetUiAction = {
    type: "setUi";
    ui: Partial<UiState> | ((previous: UiState) => Partial<UiState>);
};
type SetDataAction = {
    type: "setData";
    data: Partial<Data> | ((previous: Data) => Partial<Data>);
};
type SetAction = {
    type: "set";
    state: Partial<AppState> | ((previous: AppState) => Partial<AppState>);
};
type RegisterZoneAction = {
    type: "registerZone";
    zone: string;
};
type UnregisterZoneAction = {
    type: "unregisterZone";
    zone: string;
};
type PuckAction = {
    recordHistory?: boolean;
} & (ReorderAction | InsertAction | MoveAction | ReplaceAction | RemoveAction | DuplicateAction | SetAction | SetDataAction | SetUiAction | RegisterZoneAction | UnregisterZoneAction);

declare const FieldLabel: ({ children, icon, label, el, readOnly, className, }: {
    children?: ReactNode;
    icon?: ReactNode;
    label: string;
    el?: "label" | "div" | undefined;
    readOnly?: boolean | undefined;
    className?: string | undefined;
}) => react_jsx_runtime.JSX.Element;
type FieldLabelPropsInternal = {
    children?: ReactNode;
    icon?: ReactNode;
    label?: string;
    el?: "label" | "div";
    readOnly?: boolean;
};
declare const FieldLabelInternal: ({ children, icon, label, el, readOnly, }: FieldLabelPropsInternal) => react_jsx_runtime.JSX.Element;
type FieldPropsInternalOptional<ValueType = any, F = Field<any>> = FieldProps<ValueType, F> & {
    Label?: React.FC<FieldLabelPropsInternal>;
    label?: string;
    name?: string;
};
type FieldPropsInternal<ValueType = any, F = Field<any>> = FieldProps<ValueType, F> & {
    Label: React.FC<FieldLabelPropsInternal>;
    label?: string;
    id: string;
    name?: string;
};
declare function AutoFieldPrivate<ValueType = any, FieldType extends Field<ValueType> = Field<ValueType>>(props: FieldPropsInternalOptional<ValueType, FieldType> & {
    Label?: React.FC<FieldLabelPropsInternal>;
}): react_jsx_runtime.JSX.Element;
declare function AutoField<ValueType = any, FieldType extends Field<ValueType> = Field<ValueType>>(props: FieldProps<ValueType, FieldType>): react_jsx_runtime.JSX.Element;

declare const Button: ({ children, href, onClick, variant, type, disabled, tabIndex, newTab, fullWidth, icon, size, loading: loadingProp, }: {
    children: ReactNode;
    href?: string | undefined;
    onClick?: ((e: any) => void | Promise<void>) | undefined;
    variant?: "primary" | "secondary" | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean | undefined;
    tabIndex?: number | undefined;
    newTab?: boolean | undefined;
    fullWidth?: boolean | undefined;
    icon?: ReactNode;
    size?: "medium" | "large" | undefined;
    loading?: boolean | undefined;
}) => react_jsx_runtime.JSX.Element;

declare const Drawer: {
    ({ children, droppableId: _droppableId, direction, }: {
        children: ReactNode;
        droppableId?: string | undefined;
        direction?: "vertical" | "horizontal" | undefined;
    }): react_jsx_runtime.JSX.Element;
    Item: ({ name, children, id, label, index, }: {
        name: string;
        children?: ((props: {
            children: ReactNode;
            name: string;
        }) => ReactElement) | undefined;
        id?: string | undefined;
        label?: string | undefined;
        index: number;
    }) => react_jsx_runtime.JSX.Element;
};

type PathData = Record<string, {
    path: string[];
    label: string;
}>;
type DropZoneContext<UserConfig extends Config = Config> = {
    data: Data;
    config: UserConfig;
    componentState?: Record<string, any>;
    itemSelector?: ItemSelector | null;
    setItemSelector?: (newIndex: ItemSelector | null) => void;
    dispatch?: (action: PuckAction) => void;
    areaId?: string;
    draggedItem?: DragStart & Partial<DragUpdate>;
    placeholderStyle?: CSSProperties;
    hoveringArea?: string | null;
    setHoveringArea?: (area: string | null) => void;
    hoveringZone?: string | null;
    setHoveringZone?: (zone: string | null) => void;
    hoveringComponent?: string | null;
    setHoveringComponent?: (id: string | null) => void;
    registerZoneArea?: (areaId: string) => void;
    areasWithZones?: Record<string, boolean>;
    registerZone?: (zoneCompound: string) => void;
    unregisterZone?: (zoneCompound: string) => void;
    activeZones?: Record<string, boolean>;
    pathData?: PathData;
    registerPath?: (selector: ItemSelector) => void;
    mode?: "edit" | "render";
    zoneWillDrag?: string;
    setZoneWillDrag?: (zone: string) => void;
} | null;
declare const dropZoneContext: react.Context<DropZoneContext<Config<Record<string, any>, DefaultRootProps, string>>>;
declare const DropZoneProvider: ({ children, value, }: {
    children: ReactNode;
    value: DropZoneContext;
}) => react_jsx_runtime.JSX.Element;

declare function DropZone(props: DropZoneProps): react_jsx_runtime.JSX.Element;

declare const IconButton: ({ children, href, onClick, variant, type, disabled, tabIndex, newTab, fullWidth, title, }: {
    children: ReactNode;
    href?: string | undefined;
    onClick?: ((e: SyntheticEvent) => void | Promise<void>) | undefined;
    variant?: "primary" | "secondary" | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean | undefined;
    tabIndex?: number | undefined;
    newTab?: boolean | undefined;
    fullWidth?: boolean | undefined;
    title: string;
}) => react_jsx_runtime.JSX.Element;

type RenderFunc<Props extends {
    [key: string]: any;
} = {
    children: ReactNode;
}> = (props: Props) => ReactElement;
declare const overrideKeys: readonly ["header", "headerActions", "fields", "fieldLabel", "components", "componentItem", "outline", "puck", "preview"];
type OverrideKey = (typeof overrideKeys)[number];
type OverridesGeneric<Shape extends {
    [key in OverrideKey]: any;
}> = Shape;
type Overrides = OverridesGeneric<{
    fieldTypes: Partial<FieldRenderFunctions>;
    header: RenderFunc<{
        actions: ReactNode;
        children: ReactNode;
    }>;
    headerActions: RenderFunc<{
        children: ReactNode;
    }>;
    preview: RenderFunc;
    fields: RenderFunc<{
        children: ReactNode;
        isLoading: boolean;
        itemSelector?: ItemSelector | null;
    }>;
    fieldLabel: RenderFunc<{
        children?: ReactNode;
        icon?: ReactNode;
        label: string;
        el?: "label" | "div";
        readOnly?: boolean;
        className?: string;
    }>;
    components: RenderFunc;
    componentItem: RenderFunc<{
        children: ReactNode;
        name: string;
    }>;
    outline: RenderFunc;
    puck: RenderFunc;
}>;
type FieldRenderFunctions = Omit<{
    [Type in Field["type"]]: React.FunctionComponent<FieldProps<Extract<Field, {
        type: Type;
    }>> & {
        children: ReactNode;
        name: string;
    }>;
}, "custom"> & {
    [key: string]: React.FunctionComponent<FieldProps<any> & {
        children: ReactNode;
        name: string;
    }>;
};

type Plugin = {
    overrides: Partial<Overrides>;
};

type History<D = any> = {
    id: string;
    data: D;
};
type HistoryStore<D = any> = {
    index: number;
    currentHistory: History;
    hasPast: boolean;
    hasFuture: boolean;
    record: (data: D) => void;
    back: VoidFunction;
    forward: VoidFunction;
    nextHistory: History<D> | null;
    prevHistory: History<D> | null;
    histories: History<D>[];
};

type IframeConfig = {
    enabled?: boolean;
};

declare function Puck<UserConfig extends Config = Config>({ children, config, data: initialData, ui: initialUi, onChange, onPublish, plugins, overrides, renderHeader, renderHeaderActions, headerTitle, headerPath, viewports, iframe, dnd, initialHistories, }: {
    children?: ReactNode;
    config: UserConfig;
    data: Partial<Data>;
    ui?: Partial<UiState>;
    onChange?: (data: Data) => void;
    onPublish?: (data: Data) => void;
    plugins?: Plugin[];
    overrides?: Partial<Overrides>;
    renderHeader?: (props: {
        children: ReactNode;
        dispatch: (action: PuckAction) => void;
        state: AppState;
    }) => ReactElement;
    renderHeaderActions?: (props: {
        state: AppState;
        dispatch: (action: PuckAction) => void;
    }) => ReactElement;
    headerTitle?: string;
    headerPath?: string;
    viewports?: Viewports;
    iframe?: IframeConfig;
    dnd?: {
        disableAutoScroll?: boolean;
    };
    initialHistories?: {
        histories: History<any>[];
        index: number;
    };
}): react_jsx_runtime.JSX.Element;
declare namespace Puck {
    var Components: () => react_jsx_runtime.JSX.Element;
    var Fields: () => react_jsx_runtime.JSX.Element;
    var Outline: () => react_jsx_runtime.JSX.Element;
    var Preview: ({ id }: {
        id?: string | undefined;
    }) => react_jsx_runtime.JSX.Element;
}

declare function Render<UserConfig extends Config = Config>({ config, data, }: {
    config: UserConfig;
    data: Partial<Data>;
}): react_jsx_runtime.JSX.Element;

declare function migrate(data: Data): Data;

type PropTransform<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultRootProps = DefaultRootProps> = Partial<{
    [ComponentName in keyof Props]: (props: Props[ComponentName] & {
        [key: string]: any;
    }) => Props[ComponentName];
} & {
    root: (props: RootProps & {
        [key: string]: any;
    }) => RootProps;
}>;
declare function transformProps<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultComponentProps = DefaultComponentProps>(data: Partial<Data>, propTransforms: PropTransform<Props, RootProps>): Data;

declare function resolveAllData(data: Partial<Data>, config: Config, onResolveStart?: (item: MappedItem) => void, onResolveEnd?: (item: MappedItem) => void): Promise<{
    root: RootDataWithProps<DefaultRootProps> | RootData<DefaultRootProps>;
    content: any[];
    zones: Record<string, MappedItem[]>;
}>;

type PuckHistory = {
    back: VoidFunction;
    forward: VoidFunction;
    historyStore: HistoryStore;
};

declare const usePuck: () => {
    appState: AppState;
    config: Config<Record<string, any>, DefaultRootProps, string>;
    dispatch: (action: PuckAction) => void;
    history: Partial<PuckHistory>;
    selectedItem: ComponentData<DefaultComponentProps & {
        id: string;
    }> | null;
};

export { AppState, AutoField, AutoFieldPrivate, Button, ComponentData, Config, Data, DefaultComponentProps, DefaultRootProps, Drawer, DropZone, DropZoneProvider, Field, FieldLabel, FieldLabelInternal, FieldProps, FieldPropsInternal, IconButton, MappedItem, Puck, PuckAction, Render, RootData, RootDataWithProps, UiState, dropZoneContext, migrate, resolveAllData, transformProps, usePuck };
