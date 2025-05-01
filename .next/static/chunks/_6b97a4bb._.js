(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-blue-950 text-white  p-4 shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-2xl font-bold flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-timeline-gold",
                            children: "Crono"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Guerra"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-timeline-gold transition-colors",
                                    children: "Linha do Tempo"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/sobre",
                                    className: "hover:text-timeline-gold transition-colors",
                                    children: "Sobre"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/warEvents.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "timePeriods": (()=>timePeriods),
    "warEvents": (()=>warEvents)
});
const timePeriods = [
    {
        id: "enlightenment-wars",
        name: "Guerras da Era do Iluminismo",
        startYear: 1700,
        endYear: 1789,
        color: "#8884d8"
    },
    {
        id: "revolutionary-napoleonic",
        name: "Era Revolucionária e Napoleônica",
        startYear: 1789,
        endYear: 1815,
        color: "#d88488"
    },
    {
        id: "industrial-imperialism",
        name: "Era Industrial e Imperialismo",
        startYear: 1815,
        endYear: 1914,
        color: "#82ca9d"
    },
    {
        id: "world-wars",
        name: "Era das Guerras Mundiais",
        startYear: 1914,
        endYear: 1945,
        color: "#ffc658"
    },
    {
        id: "cold-war",
        name: "Guerra Fria",
        startYear: 1945,
        endYear: 1991,
        color: "#8dd1e1"
    },
    {
        id: "post-cold-war",
        name: "Era Pós-Guerra Fria",
        startYear: 1991,
        endYear: 2001,
        color: "#a4de6c"
    },
    {
        id: "war-on-terror",
        name: "Era da Guerra ao Terror",
        startYear: 2001,
        endYear: 2010,
        color: "#d0ed57"
    },
    {
        id: "hybrid-warfare",
        name: "Era dos Conflitos Híbridos",
        startYear: 2010,
        endYear: 2025,
        color: "#83a6ed"
    }
];
const warEvents = [
    {
        id: "hundred-years-war-1337",
        year: 1337,
        title: "Hundred Years' War",
        description: "A prolonged conflict between England and France, fought primarily over territorial disputes and the French throne. It spanned 116 years and is marked by significant battles, political intrigue, and the rise of national identities.",
        mediaPortrayal: "The war was heavily covered by chroniclers, often glorifying major battles such as Agincourt and depicting the conflict as a struggle for national survival, with heroic leaders like Joan of Arc emerging from the French side.",
        propaganda: {
            sides: [
                {
                    name: "Kingdom of England",
                    slogans: [
                        "Claim to the French Throne",
                        "Defenders of English soil"
                    ],
                    mediaOutlets: [
                        "Royal proclamations",
                        "Chroniclers"
                    ],
                    techniques: [
                        "Military victories",
                        "Glorification of royal lineage"
                    ]
                },
                {
                    name: "Kingdom of France",
                    slogans: [
                        "Defenders of the Crown",
                        "Liberators of France"
                    ],
                    mediaOutlets: [
                        "Royal speeches",
                        "Religious endorsements"
                    ],
                    techniques: [
                        "Religious justification",
                        "Patriotism and unity"
                    ]
                }
            ],
            analysis: "Both sides used media and propaganda to rally support for their causes. The English framed their struggle as a just claim to the throne, while the French presented themselves as defenders of their kingdom and sovereignty."
        },
        theories: [
            {
                title: "Feudalism vs. Nation-State",
                description: "Some historians argue that the war marked the decline of feudalism and the rise of the modern nation-state, as the conflict brought about the centralization of power in both England and France.",
                evidence: "The creation of standing armies and new forms of taxation, alongside the increasing power of monarchs."
            }
        ],
        image: "https://cdn.britannica.com/19/172519-050-F3B2578B/Battle-of-Agincourt.jpg",
        relatedNews: [
            {
                title: "Battle of Agincourt (1415)",
                description: "The English achieved a decisive victory at the Battle of Agincourt, where Henry V's outnumbered forces defeated the French.",
                source: "Chronicles of the Hundred Years' War",
                date: "1415-10-25"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Medici Bank",
                    country: "Italy",
                    assets: "Gold reserves",
                    amount: "Significant financing for France",
                    currency: "Florin",
                    owners: [
                        {
                            name: "Medici Family",
                            type: "individual",
                            religion: "Catholic",
                            politicalAffiliation: "Pro-French interests"
                        }
                    ],
                    side: "France"
                }
            ],
            financiers: [
                {
                    name: "King Edward III",
                    type: "government",
                    amount: "Funding through taxes and the exploitation of territories",
                    assets: "Royal Treasury",
                    religion: "Catholic",
                    currency: "Pound Sterling",
                    side: "England"
                }
            ],
            financialImpact: "The prolonged war drained the economies of both kingdoms, leading to massive debt and an increased reliance on loans from banking families like the Medici."
        },
        casualties: {
            military: "Approximately 3 million",
            civilian: "Hundreds of thousands (due to famine and disease)",
            total: "3-4 million"
        },
        keyFigures: [
            {
                name: "Edward III of England",
                role: "King of England",
                side: "England",
                fate: "Reigned until 1377"
            },
            {
                name: "Joan of Arc",
                role: "French military leader",
                side: "France",
                fate: "Executed in 1431"
            }
        ],
        winners: [
            {
                name: "Kingdom of France",
                country: "France",
                side: "France",
                date: "1453-10-19"
            }
        ]
    },
    {
        id: "war-of-the-roses-1455",
        year: 1455,
        title: "War of the Roses",
        description: "A series of civil wars fought between the houses of Lancaster (red rose) and York (white rose) for control of the English throne. The conflict led to the eventual establishment of the Tudor dynasty.",
        mediaPortrayal: "Medieval chroniclers depicted the war as a tragic struggle, often focusing on the personal ambitions of the key players rather than broader political causes. The story of Richard III's villainous reign became legendary in English culture.",
        propaganda: {
            sides: [
                {
                    name: "House of Lancaster",
                    slogans: [
                        "Rightful King of England",
                        "Red Rose of Valor"
                    ],
                    mediaOutlets: [
                        "Royal proclamations",
                        "Pamphlets"
                    ],
                    techniques: [
                        "Appeals to royal lineage",
                        "Depiction of Yorkists as traitors"
                    ]
                },
                {
                    name: "House of York",
                    slogans: [
                        "True King of England",
                        "White Rose of Purity"
                    ],
                    mediaOutlets: [
                        "Chroniclers",
                        "Public speeches"
                    ],
                    techniques: [
                        "Depiction of Lancaster as usurpers",
                        "Appeals to loyalty and justice"
                    ]
                }
            ],
            analysis: "The media portrayed the war as a noble struggle for the rightful ruler of England, but it was driven largely by personal ambition and a desire for power."
        },
        theories: [
            {
                title: "Dynastic Struggle vs. Feudal Decline",
                description: "The War of the Roses may have been more about the breakdown of feudal structures and the shift toward a centralized monarchy than about dynastic claims alone.",
                evidence: "The eventual victory of Henry VII marked the end of feudal fragmentation and the rise of the Tudor dynasty, which centralized power."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/King_Henry_VII_from_NPG.jpg/250px-King_Henry_VII_from_NPG.jpg",
        relatedNews: [
            {
                title: "Battle of Bosworth Field",
                description: "The decisive battle of the war, where Richard III was killed and Henry Tudor ascended to the throne as Henry VII.",
                source: "Chronicles of the War of the Roses",
                date: "1485-08-22"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Medici Bank",
                    country: "Italy",
                    assets: "Gold reserves",
                    amount: "None directly involved in this war",
                    currency: "Florin",
                    owners: [
                        {
                            name: "Medici Family",
                            type: "individual",
                            religion: "Catholic",
                            politicalAffiliation: "Pro-Tudor interests"
                        }
                    ],
                    side: "Tudor (via alliances)"
                }
            ],
            financiers: [
                {
                    name: "Henry Tudor",
                    type: "individual",
                    amount: "Personal fortune from his marriage to Elizabeth of York",
                    side: "Lancaster (by marriage)",
                    religion: "Catholic",
                    currency: "Pound Sterling"
                }
            ],
            financialImpact: "The war drained England's treasury and destabilized its economy, but the eventual victory of Henry VII helped bring long-term stability."
        },
        casualties: {
            military: "Approx. 100,000",
            civilian: "Tens of thousands (due to sieges and rebellion)",
            total: "Over 100,000"
        },
        keyFigures: [
            {
                name: "Richard III",
                role: "King of England",
                side: "House of York",
                fate: "Killed at the Battle of Bosworth"
            },
            {
                name: "Henry VII",
                role: "King of England",
                side: "House of Lancaster",
                fate: "Founded the Tudor dynasty"
            }
        ],
        winners: [
            {
                name: "House of Tudor",
                country: "England",
                side: "Lancaster (via marriage)",
                date: "1485-08-22"
            }
        ]
    },
    {
        id: "italian-wars-1494",
        year: 1494,
        title: "Guerras Italianas",
        description: "Uma série de conflitos militares entre várias potências europeias, incluindo França, Espanha e os Estados italianos, pela supremacia territorial na península italiana. As guerras foram motivadas tanto por disputas dinásticas quanto por questões de controle territorial.",
        mediaPortrayal: "Durante o período, as batalhas e as vitórias foram amplamente retratadas por cronistas e artistas. A representação da luta pela Itália também foi uma poderosa ferramenta de propaganda, com imagens de bravura e tragédia associadas à luta pelo controle das cidades-estados italianas.",
        propaganda: {
            sides: [
                {
                    name: "Reino da França",
                    slogans: [
                        "Defensores da Coroa de Nápoles",
                        "Unidade Francesa em Itália"
                    ],
                    mediaOutlets: [
                        "Proclamações reais",
                        "Cartazes e escritos"
                    ],
                    techniques: [
                        "Apelo à herança dinástica",
                        "Glorificação da expansão imperial francesa"
                    ]
                },
                {
                    name: "Reino de Espanha",
                    slogans: [
                        "A Ordem na Península",
                        "Reinos Unidos sob a Coroa de Aragão"
                    ],
                    mediaOutlets: [
                        "Pragmáticas reais",
                        "Diplomacia e aliança com o Papa"
                    ],
                    techniques: [
                        "Proteção do Papado",
                        "Justificação religiosa"
                    ]
                },
                {
                    name: "Estados Italianos (Milão, Veneza, Nápoles, etc.)",
                    slogans: [
                        "Autonomia italiana",
                        "A unidade sob as cidades-estados"
                    ],
                    mediaOutlets: [
                        "Manifestos locais",
                        "Crônicas italianas"
                    ],
                    techniques: [
                        "Foco em resistir à ocupação estrangeira",
                        "Apelo à identidade local e autonomia"
                    ]
                }
            ],
            analysis: "Cada lado usou a propaganda para afirmar que lutava por interesses legítimos — seja por heranças dinásticas ou pela defesa da soberania italiana contra as potências estrangeiras. A rivalidade entre França e Espanha, em particular, foi uma característica central da guerra."
        },
        theories: [
            {
                title: "Rivalidade Franco-Espanhola",
                description: "A guerra entre França e Espanha durante as Guerras Italianas pode ser vista como uma expressão da luta pela supremacia no Mediterrâneo e na Europa, onde ambos os reinos buscavam expandir suas influências políticas e territoriais.",
                evidence: "As sucessivas invasões da Itália pelas forças francesas e espanholas, culminando no controle do Reino de Nápoles pela Espanha, ilustram essa disputa."
            },
            {
                title: "Ascensão do Poder Papal",
                description: "As Guerras Italianas também são vistas como um período em que o Papado, embora nominalmente religioso, se envolveu diretamente na política territorial, tentando expandir sua influência sobre os Estados italianos.",
                evidence: "A aliança do Papa com o império espanhol para derrotar forças invasoras e garantir a estabilidade do domínio papal em Roma."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Habsburg_dominions_1700.png",
        relatedNews: [
            {
                title: "Batalha de Pavia (1525)",
                description: "Uma das batalhas decisivas das Guerras Italianas, onde o exército francês foi derrotado pelas forças espanholas, resultando na captura do rei Francisco I.",
                source: "Crônicas de guerra",
                date: "1525-02-24"
            },
            {
                title: "Tratado de Cateau-Cambrésis (1559)",
                description: "O tratado marcou o fim das Guerras Italianas, com a França renunciando às suas pretensões sobre a Itália e a Espanha consolidando sua supremacia na península.",
                source: "Tratados de Paz",
                date: "1559-04-03"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Banco di San Giorgio",
                    country: "Gênova, Itália",
                    assets: "Resgates financeiros usados para financiar tropas italianas",
                    amount: "Grandes somas destinadas ao financiamento das campanhas",
                    currency: "Lira",
                    owners: [
                        {
                            name: "Família Doria",
                            religion: "Católica",
                            politicalAffiliation: "Pro-Veneza e anti-França"
                        }
                    ],
                    side: "Estados italianos"
                }
            ],
            financiers: [
                {
                    name: "Reino de Espanha",
                    type: "government",
                    amount: "Empréstimos e fornecimento de tropas espanholas",
                    assets: "Imensos recursos financeiros e militares",
                    religion: "Católica",
                    currency: "Pezeta",
                    side: "Espanha"
                },
                {
                    name: "Reino da França",
                    type: "government",
                    amount: "Financiamento das campanhas de invasão italiana",
                    assets: "Bancadas reais e recursos do norte da França",
                    religion: "Católica",
                    currency: "Franco francês",
                    side: "França"
                }
            ],
            financialImpact: "As Guerras Italianas tiveram um enorme impacto financeiro, com enormes somas gastas em recrutamento de exércitos, campanhas militares e pagamentos de aliados. O conflito resultou em uma enorme dívida para os países envolvidos."
        },
        casualties: {
            military: "Estima-se que entre 100.000 e 200.000 soldados perderam a vida em batalhas e cercos",
            civilian: "Milhares de civis morreram devido a saques, doenças e destruição de cidades",
            total: "Mais de 200.000"
        },
        keyFigures: [
            {
                name: "Carlos I da Espanha",
                role: "Rei da Espanha",
                side: "Espanha",
                fate: "Consolidou o poder espanhol na Itália após a vitória"
            },
            {
                name: "Luís XII da França",
                role: "Rei da França",
                side: "França",
                fate: "Faleceu enquanto buscava expandir as fronteiras francesas na Itália"
            },
            {
                name: "Papa Júlio II",
                role: "Papa",
                side: "Espanha (em aliança)",
                fate: "Apoiou os esforços da Espanha para manter a estabilidade do papado"
            }
        ],
        winners: [
            {
                name: "Reino da Espanha",
                country: "Espanha",
                side: "Espanha",
                date: "1559-04-03"
            }
        ]
    },
    {
        id: "dutch-independence-war-1568",
        year: 1568,
        title: "Guerra de Independência dos Países Baixos",
        description: "Um conflito entre as Províncias Unidas dos Países Baixos e o Reino da Espanha, onde os territórios dos Países Baixos buscaram independência do domínio espanhol. A guerra foi marcada por lutas religiosas, políticas e econômicas, culminando na independência de facto dos Países Baixos em 1648.",
        mediaPortrayal: "A guerra foi amplamente retratada como uma luta contra a opressão religiosa e política. As representações mostraram a resistência heróica das cidades e províncias contra o domínio espanhol, com o uso de imagens simbólicas do protestantismo e da liberdade.",
        propaganda: {
            sides: [
                {
                    name: "Reino de Espanha",
                    slogans: [
                        "Manutenção da unidade católica",
                        "Defesa da coroa espanhola"
                    ],
                    mediaOutlets: [
                        "Editais reais",
                        "Panfletos religiosos"
                    ],
                    techniques: [
                        "Apelo à lealdade religiosa",
                        "Ameaça de heresia e rebelião"
                    ]
                },
                {
                    name: "Províncias Unidas (Países Baixos)",
                    slogans: [
                        "Liberdade religiosa",
                        "Independência contra a opressão",
                        "Unidade das províncias"
                    ],
                    mediaOutlets: [
                        "Cartazes de rebeldes",
                        "Escritos clandestinos",
                        "Traduções de protestos"
                    ],
                    techniques: [
                        "Enfatização das injustiças espanholas",
                        "Promoção da liberdade religiosa e política"
                    ]
                }
            ],
            analysis: "Cada lado usou a propaganda para reforçar sua legitimidade: a Espanha com sua defesa da ortodoxia católica e da autoridade real, e as Províncias Unidas com sua luta pela autonomia e liberdade religiosa, especialmente contra o autoritarismo do Habsburgo."
        },
        theories: [
            {
                title: "Religião e Autonomia",
                description: "A Guerra de Independência dos Países Baixos é vista frequentemente como uma luta pela liberdade religiosa (protestante contra católica) e pela autonomia política das regiões sob domínio estrangeiro.",
                evidence: "As tensões religiosas entre católicos e protestantes, como o movimento calvinista, foram fundamentais para os conflitos que ocorreram durante a guerra."
            },
            {
                title: "A Ascensão do Nacionalismo",
                description: "A guerra também é vista como um dos primeiros exemplos de nacionalismo moderno, com as províncias do norte se unindo sob uma bandeira comum para formar um novo estado independente contra um monarca estrangeiro.",
                evidence: "O desenvolvimento das Províncias Unidas como uma entidade independente e autônoma, com uma identidade própria, refletiu os elementos de um movimento nacionalista."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/3/30/La_ville_de_Chartres_assi%C3%A9g%C3%A9e_et_battue_par_le_Prince_de_Cond%C3%A9_en_1568.png",
        relatedNews: [
            {
                title: "Batalha de Heiligerlee (1568)",
                description: "Primeira grande batalha da guerra, onde as forças rebeldes dos Países Baixos enfrentaram as tropas espanholas.",
                source: "Crônicas militares flamengas",
                date: "1568-05-23"
            },
            {
                title: "Assinatura da Paz de Westfália (1648)",
                description: "Tratado que confirmou a independência dos Países Baixos da Espanha e assegurou a autonomia das províncias.",
                source: "Tratados de paz",
                date: "1648-10-24"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Banco de Antuérpia",
                    country: "Países Baixos",
                    assets: "Reservas financeiras dos comerciantes locais",
                    amount: "Grande parte da economia local foi direcionada para financiar os custos da guerra",
                    currency: "Florim",
                    owners: [
                        {
                            name: "Mercadores do Norte",
                            religion: "Protestante",
                            politicalAffiliation: "Independência local"
                        }
                    ],
                    side: "Províncias Unidas"
                }
            ],
            financiers: [
                {
                    name: "Reino de Espanha",
                    type: "government",
                    amount: "Financiamento das tropas espanholas e fortificações",
                    assets: "Recursos das Américas e das finanças reais",
                    religion: "Católica",
                    currency: "Real",
                    side: "Espanha"
                },
                {
                    name: "República das Províncias Unidas",
                    type: "government",
                    amount: "Empréstimos e apoio de comerciantes",
                    assets: "Recursos acumulados da guerra e do comércio",
                    religion: "Protestante",
                    currency: "Florim",
                    side: "Províncias Unidas"
                }
            ],
            financialImpact: "A guerra teve grandes custos financeiros para ambos os lados. O Reino de Espanha ficou profundamente endividado, especialmente devido às suas campanhas militares em outros lugares da Europa, enquanto as Províncias Unidas se beneficiaram do comércio e de empréstimos financeiros, especialmente da cidade de Amsterdã."
        },
        casualties: {
            military: "Estimativas indicam que mais de 100.000 soldados morreram durante os confrontos ao longo de mais de 80 anos.",
            civilian: "Milhares de civis morreram devido a saques, massacres e o impacto das batalhas.",
            total: "Mais de 150.000"
        },
        keyFigures: [
            {
                name: "Filipe II da Espanha",
                role: "Rei da Espanha",
                side: "Espanha",
                fate: "Tentou esmagar a revolta e manter o controle sobre os Países Baixos, mas fracassou após décadas de guerra."
            },
            {
                name: "Guilherme de Orange",
                role: "Príncipe dos Países Baixos",
                side: "Províncias Unidas",
                fate: "Liderou a resistência contra o domínio espanhol, sendo uma figura chave na independência dos Países Baixos."
            },
            {
                name: "Don Juan de Áustria",
                role: "General espanhol",
                side: "Espanha",
                fate: "Tinha o comando das forças espanholas e foi responsável pela reconquista temporária de algumas áreas antes de sua morte precoce."
            }
        ],
        winners: [
            {
                name: "Províncias Unidas",
                country: "Países Baixos",
                side: "Províncias Unidas",
                date: "1648-10-24"
            }
        ]
    },
    {
        id: "thirty-years-war-1618",
        year: 1618,
        title: "Guerra dos Trinta Anos",
        description: "A Guerra dos Trinta Anos foi um conflito religioso, político e territorial que envolveu a maioria das grandes potências europeias. Começou com as tensões religiosas entre católicos e protestantes no Império Romano Germânico, mas se expandiu para uma guerra mais ampla envolvendo dinastias e estados europeus. O conflito resultou em enormes destruições e uma reorganização do equilíbrio de poder na Europa.",
        mediaPortrayal: "A guerra foi amplamente representada em termos religiosos e políticos, com imagens de massacres, batalhas e o sofrimento da população civil. As propagandas de ambos os lados focaram em questões de fé e lealdade dinástica, muitas vezes exagerando a brutalidade das ações inimigas.",
        propaganda: {
            sides: [
                {
                    name: "Católicos (Habsburgos e aliados)",
                    slogans: [
                        "Unidade religiosa",
                        "Defesa da fé católica",
                        "Manutenção da ordem imperial"
                    ],
                    mediaOutlets: [
                        "Panfletos religiosos",
                        "Jornais controlados pela corte",
                        "Pregações e sermões"
                    ],
                    techniques: [
                        "Apelo ao medo do protestantismo",
                        "Unidade contra os heréticos",
                        "Chamado à defesa do Império"
                    ]
                },
                {
                    name: "Protestantes (Estados do Norte e aliados)",
                    slogans: [
                        "Liberdade religiosa",
                        "Liberdade contra a opressão",
                        "Autonomia para os estados protestantes"
                    ],
                    mediaOutlets: [
                        "Panfletos protestantes",
                        "Cartazes de resistência",
                        "Publicações anti-imperiais"
                    ],
                    techniques: [
                        "Apelo à resistência contra a tirania",
                        "Enfatização da luta pela liberdade religiosa",
                        "Apelo à autossuficiência dos estados protestantes"
                    ]
                }
            ],
            analysis: "A propaganda foi uma ferramenta crucial para angariar apoio, com cada lado tentando retratar o outro como um inimigo opressor. O medo religioso e as lealdades políticas desempenharam um papel significativo nas campanhas de propaganda durante toda a guerra."
        },
        theories: [
            {
                title: "Conflito Religioso vs. Político",
                description: "Embora a guerra tenha começado com disputas religiosas entre católicos e protestantes, ela rapidamente se transformou em um conflito dinástico e político, envolvendo questões de poder e controle territorial.",
                evidence: "A guerra começou com a Defenestração de Praga, um evento essencialmente político, mas rapidamente escalou para uma luta religiosa mais ampla, com o envolvimento de diferentes potências europeias."
            },
            {
                title: "Impacto da Guerra no Equilíbrio Europeu",
                description: "A guerra alterou permanentemente o equilíbrio de poder na Europa. A ascensão de potências como a França e a diminuição do poder dos Habsburgos alteraram a dinâmica política e territorial.",
                evidence: "O Tratado de Westfália (1648) resultou em mudanças significativas nas fronteiras e no equilíbrio de poder, com os Habsburgos enfraquecidos e os estados protestantes, como a Suécia, consolidando maior poder."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Thirty_Years_War_Collage.jpg",
        relatedNews: [
            {
                title: "Defenestração de Praga (1618)",
                description: "O evento que marcou o início da Guerra dos Trinta Anos, onde dois representantes católicos foram jogados pela janela do Castelo de Praga, desencadeando um conflito aberto.",
                source: "Crônicas de Praga",
                date: "1618-05-23"
            },
            {
                title: "Tratado de Westfália (1648)",
                description: "Tratado de paz que concluiu a Guerra dos Trinta Anos, resultando em mudanças territoriais e no reconhecimento da independência de várias regiões.",
                source: "Tratados de paz",
                date: "1648-10-24"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Banco Imperial de Viena",
                    country: "Áustria",
                    assets: "Apoio financeiro dos Habsburgos e das finanças imperiais.",
                    amount: "Fortes investimentos e empréstimos foram feitos para manter o esforço de guerra.",
                    currency: "Florim",
                    owners: [
                        {
                            name: "Casa dos Habsburgos",
                            religion: "Católica",
                            politicalAffiliation: "Imperial"
                        }
                    ],
                    side: "Católicos"
                },
                {
                    name: "Banco da Suécia",
                    country: "Suécia",
                    assets: "Suécia obteve fundos através de empréstimos e saques nas regiões conquistadas.",
                    amount: "Grande parte do financiamento veio de empréstimos de comerciantes suecos e da recuperação de territórios conquistados.",
                    currency: "Coroa Sueca",
                    owners: [
                        {
                            name: "Reino da Suécia",
                            religion: "Luterana",
                            politicalAffiliation: "Protestante"
                        }
                    ],
                    side: "Protestantes"
                }
            ],
            financiers: [
                {
                    name: "Reino da França",
                    type: "government",
                    amount: "Financiamento de campanhas militares e apoio a aliados protestantes.",
                    assets: "Recursos da nobreza francesa e comércio.",
                    religion: "Católica",
                    currency: "Franco",
                    side: "Protestantes"
                },
                {
                    name: "Reino de Espanha",
                    type: "government",
                    amount: "Gastos militares para manter o império e lutar contra a expansão protestante.",
                    assets: "Financiamento de tropas e forças da casa dos Habsburgos.",
                    religion: "Católica",
                    currency: "Real",
                    side: "Católicos"
                }
            ],
            financialImpact: "A guerra causou um grande impacto econômico, com enormes dívidas sendo assumidas por várias nações e a desestabilização econômica de muitas regiões devastadas pelos combates. As finanças das grandes potências europeias foram fortemente afetadas, especialmente devido aos altos custos de guerra e ao saques das tropas em territórios conquistados."
        },
        casualties: {
            military: "Estima-se que mais de 8 milhões de pessoas, incluindo soldados e civis, morreram devido ao conflito.",
            civilian: "A população civil sofreu enormemente, com muitas mortes devido a saques, fome e doenças.",
            total: "Mais de 8 milhões"
        },
        keyFigures: [
            {
                name: "Ferdinando II",
                role: "Imperador do Sacro Império Romano-Germânico",
                side: "Católicos",
                fate: "Tentou manter o controle sobre o império, mas não conseguiu evitar o enfraquecimento da autoridade imperial."
            },
            {
                name: "Gustavo II Adolfo",
                role: "Rei da Suécia",
                side: "Protestantes",
                fate: "Liderou as forças protestantes até sua morte na Batalha de Lutzen em 1632, tornando-se um herói nacional na Suécia."
            },
            {
                name: "Richelieu",
                role: "Cardeal e Primeiro-ministro da França",
                side: "Protestantes",
                fate: "Envolvido no financiamento e apoio aos estados protestantes durante a guerra, visando enfraquecer a casa dos Habsburgos."
            }
        ],
        winners: [
            {
                name: "França",
                country: "França",
                side: "Protestantes",
                date: "1648-10-24"
            },
            {
                name: "Suécia",
                country: "Suécia",
                side: "Protestantes",
                date: "1648-10-24"
            }
        ]
    },
    {
        id: "war-of-devolution-1667",
        year: 1667,
        title: "Guerra de Devolução",
        description: "A Guerra de Devolução foi um conflito breve entre a França e a Espanha, com o rei Luís XIV reivindicando territórios do Franco-Condado, com base na alegação de que esses territórios deveriam ser devolvidos à França como parte de um dote real da esposa de Luís XIV, Maria Teresa da Áustria. A guerra foi marcada por rápidas vitórias francesas, mas terminou com a intervenção das outras potências europeias e a assinatura de um tratado de paz.",
        mediaPortrayal: "A guerra foi retratada como uma demonstração do poder militar francês e da ambição territorial de Luís XIV, com uma ênfase nas vitórias rápidas da França. As imagens e relatos focavam no grande poderio do exército francês e no domínio militar de Luís XIV.",
        propaganda: {
            sides: [
                {
                    name: "França",
                    slogans: [
                        "Restaurar o direito de dote",
                        "Glória de Luís XIV",
                        "Expandir a França"
                    ],
                    mediaOutlets: [
                        "Panfletos reais",
                        "Jornais franceses",
                        "Crônicas de guerra"
                    ],
                    techniques: [
                        "Exaltação do poder do rei",
                        "Justificação do conflito com base no direito dinástico",
                        "Promoção das vitórias francesas nas batalhas"
                    ]
                },
                {
                    name: "Espanha e Países Baixos",
                    slogans: [
                        "Manter a soberania",
                        "Proteger os territórios hispânicos",
                        "Resistência à expansão francesa"
                    ],
                    mediaOutlets: [
                        "Publicações de estados aliados",
                        "Jornais de Amsterdã",
                        "Cartazes de resistência"
                    ],
                    techniques: [
                        "Apelo à defesa do status quo",
                        "Apelo ao medo da hegemonia francesa",
                        "Enfatização da lealdade ao império espanhol"
                    ]
                }
            ],
            analysis: "A propaganda francesa enfatizou o direito dinástico e a glória de Luís XIV como justificativa para a guerra. Por outro lado, a propaganda espanhola e dos Países Baixos apelou para o medo da expansão francesa e a necessidade de manter o equilíbrio de poder na Europa."
        },
        theories: [
            {
                title: "Direito Dinástico vs. Soberania Nacional",
                description: "O conflito foi em grande parte uma disputa sobre direitos dinásticos, com Luís XIV reivindicando terras com base no dote de sua esposa, enquanto a Espanha e os Países Baixos viam essas reivindicações como uma ameaça à soberania e à ordem europeia.",
                evidence: "A França baseou sua guerra no que chamava de 'direito de devolução' das terras, enquanto a Espanha e os Países Baixos resistiram a essa justificação como uma tentativa de Luís XIV de expandir seu domínio."
            },
            {
                title: "Ambições de Luís XIV",
                description: "A guerra de 1667 foi uma das primeiras manifestações das ambições territoriais de Luís XIV, que mais tarde continuaria sua política expansionista em guerras subsequentes.",
                evidence: "A França rapidamente obteve vitórias e anexou terras importantes, como o Franco-Condado, sem uma resistência significativa, o que reforçou a ideia de que Luís XIV estava em busca de consolidar um império francês."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/LeBrun_Louis_XIV_at_Douai_in_the_War_of_Devolution_1667.jpg",
        relatedNews: [
            {
                title: "Batalha de Seneffe (1667)",
                description: "Uma das batalhas importantes na Guerra de Devolução onde os exércitos franceses derrotaram as forças aliadas dos Países Baixos e da Espanha.",
                source: "Crônicas de guerra francesas",
                date: "1667-08-11"
            },
            {
                title: "Tratado de Aix-la-Chapelle (1668)",
                description: "O tratado que encerrou a Guerra de Devolução, no qual a França manteve as conquistas do Franco-Condado, mas teve que desistir de outras áreas.",
                source: "Tratados de paz",
                date: "1668-05-02"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Banco de Paris",
                    country: "França",
                    assets: "O financiamento da guerra foi facilitado pelo Banco de Paris, que ajudou a sustentar os custos da campanha militar francesa.",
                    amount: "Investimentos substanciais foram feitos para garantir a vitória rápida e a manutenção do exército.",
                    currency: "Franco",
                    owners: [
                        {
                            name: "Rei Luís XIV",
                            religion: "Católica",
                            politicalAffiliation: "Absolutista"
                        }
                    ],
                    side: "França"
                }
            ],
            financiers: [
                {
                    name: "Reino da França",
                    type: "government",
                    amount: "A guerra foi financiada principalmente pelos impostos reais e empréstimos do Banco de Paris.",
                    assets: "A França utilizou sua posição financeira forte para conduzir a guerra.",
                    religion: "Católica",
                    currency: "Franco",
                    side: "França"
                },
                {
                    name: "Reino de Espanha",
                    type: "government",
                    amount: "Os custos da guerra foram suportados por uma aliança de recursos entre a Espanha e os Países Baixos.",
                    assets: "A Espanha utilizou seus recursos para tentar manter as províncias e resistir à França.",
                    religion: "Católica",
                    currency: "Real",
                    side: "Espanha"
                }
            ],
            financialImpact: "A guerra teve um impacto financeiro considerável, com a França se endividando para sustentar suas campanhas. A vitória permitiu à França aumentar sua influência, mas também gerou altos custos, especialmente com a manutenção de um exército grande e em expansão."
        },
        casualties: {
            military: "A guerra causou perdas militares limitadas devido à sua natureza relativamente curta, com cerca de 20.000 mortos em combate.",
            civilian: "O impacto na população civil foi moderado, mas algumas regiões sofreram com os saques e destruição.",
            total: "Cerca de 25.000 mortos no total"
        },
        keyFigures: [
            {
                name: "Luís XIV",
                role: "Rei da França",
                side: "França",
                fate: "Conquistou o Franco-Condado e consolidou seu poder, mas a guerra também iniciou um período de confronto com outras potências europeias."
            },
            {
                name: "Carlos II da Espanha",
                role: "Rei da Espanha",
                side: "Espanha",
                fate: "Apesar de ser derrotado, Carlos II manteve a maior parte do império, mas perdeu o Franco-Condado para a França."
            },
            {
                name: "Maria Teresa da Áustria",
                role: "Esposa de Luís XIV",
                side: "França",
                fate: "A reivindicação francesa à terra foi baseada no dote de Maria Teresa, que foi usada como justificação para a guerra."
            }
        ],
        winners: [
            {
                name: "França",
                country: "França",
                side: "França",
                date: "1668-05-02"
            }
        ]
    },
    {
        id: "franco-dutch-war-1672",
        year: 1672,
        title: "Guerra Franco-Holandesa",
        description: "A Guerra Franco-Holandesa foi um conflito entre a França e a República das Sete Províncias Unidas, também conhecida como Países Baixos, com o objetivo de enfraquecer os Países Baixos e expandir os territórios franceses. Luís XIV da França procurou explorar a fraqueza das nações vizinhas e obter controle de territórios estratégicos. A guerra culminou com a assinatura do Tratado de Nijmegen, onde a França obteve concessões territoriais, mas também viu a resistência crescente dos Países Baixos e seus aliados.",
        mediaPortrayal: "Durante a guerra, a propaganda francesa exaltou as vitórias militares e a grandeza de Luís XIV, enquanto as campanhas de resistência dos Países Baixos foram frequentemente retratadas como heroicas. As ilustrações mostravam a força do exército francês, ao mesmo tempo que também refletiam o sofrimento da população civil nos Países Baixos devido aos ataques franceses.",
        propaganda: {
            sides: [
                {
                    name: "França",
                    slogans: [
                        "Glória de Luís XIV",
                        "Expandir o Reino da França",
                        "Poder e Grandeza"
                    ],
                    mediaOutlets: [
                        "Panfletos reais",
                        "Cartazes franceses",
                        "Jornais de Paris"
                    ],
                    techniques: [
                        "Exaltação das vitórias francesas",
                        "Justificação com base na expansão territorial legítima",
                        "Apelo ao orgulho nacional"
                    ]
                },
                {
                    name: "República das Sete Províncias Unidas",
                    slogans: [
                        "Resistir à tirania",
                        "Defender a liberdade",
                        "Pátria e soberania"
                    ],
                    mediaOutlets: [
                        "Jornais holandeses",
                        "Panfletos de resistência",
                        "Cartazes de propagação anti-francesa"
                    ],
                    techniques: [
                        "Apelo à resistência",
                        "Promoção da unidade das províncias",
                        "Chamada à ação para defender as liberdades religiosas e comerciais"
                    ]
                }
            ],
            analysis: "A propaganda francesa teve como foco a necessidade de expandir o território para garantir a segurança e a grandeza do reino. A propaganda dos Países Baixos, por outro lado, enfatizou a luta pela liberdade e resistência à opressão francesa."
        },
        theories: [
            {
                title: "Ambição territorial de Luís XIV",
                description: "A guerra foi vista como parte da expansão imperialista de Luís XIV, que queria consolidar o poder francês na Europa, com foco nos Países Baixos como ponto estratégico.",
                evidence: "As rápidas vitórias francesas, especialmente nas regiões do norte e no Franco-Condado, indicaram que Luís XIV estava buscando alterar o equilíbrio de poder na Europa a seu favor."
            },
            {
                title: "Resistência holandesa",
                description: "A resistência holandesa foi fundamental para a eventual vitória, com a habilidade da marinha holandesa em combater a França e formar alianças com a Inglaterra e outras potências europeias.",
                evidence: "A marinha holandesa teve sucesso em enfrentar a frota francesa, e as táticas de guerra urbana também se mostraram eficazes para desgastar o exército invasor."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Battle_of_Solebay_june_7_1672_-_De_Ruyter_against_the_Duke_of_York_%28Willem_van_de_Velde_II%2C_1691%29.jpg",
        relatedNews: [
            {
                title: "Batalha de Solebay (1672)",
                description: "Uma batalha naval importante entre a frota francesa e as forças navais da Inglaterra e dos Países Baixos.",
                source: "Crônicas de guerra europeias",
                date: "1672-06-07"
            },
            {
                title: "Tratado de Nijmegen (1678)",
                description: "Tratado que pôs fim à guerra, garantindo à França vários territórios, mas também resultando em uma série de concessões para os Países Baixos e outros aliados.",
                source: "Tratados de paz",
                date: "1678-08-10"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Banco de Paris",
                    country: "França",
                    assets: "O financiamento da guerra foi em grande parte garantido pelos empréstimos tomados por Luís XIV para sustentar o exército francês.",
                    amount: "Empréstimos consideráveis foram feitos para apoiar a guerra, com um aumento no endividamento do estado francês.",
                    currency: "Franco",
                    owners: [
                        {
                            name: "Rei Luís XIV",
                            religion: "Católica",
                            politicalAffiliation: "Absolutista"
                        }
                    ],
                    side: "França"
                }
            ],
            financiers: [
                {
                    name: "Reino da França",
                    type: "government",
                    amount: "A guerra foi financiada principalmente pelo aumento dos impostos e pelo endividamento do estado.",
                    assets: "O estado francês usou suas vastas reservas para financiar o exército.",
                    religion: "Católica",
                    currency: "Franco",
                    side: "França"
                },
                {
                    name: "República das Sete Províncias Unidas",
                    type: "government",
                    amount: "Os Países Baixos se financiaram com recursos próprios e por meio de empréstimos externos, incluindo da Inglaterra.",
                    assets: "Os Países Baixos usaram suas finanças comerciais para combater a invasão francesa.",
                    religion: "Protestante",
                    currency: "Florim",
                    side: "Países Baixos"
                }
            ],
            financialImpact: "A guerra teve um impacto significativo nas finanças de ambas as potências. A França se endividou para sustentar a guerra, enquanto os Países Baixos tiveram que buscar apoio financeiro de aliados como a Inglaterra para resistir à invasão."
        },
        casualties: {
            military: "A guerra resultou em pesadas baixas militares de ambos os lados, com cerca de 50.000 mortos ou feridos, incluindo batalhas em terra e no mar.",
            civilian: "A população civil dos Países Baixos sofreu com saques e destruição de propriedades, principalmente em áreas invadidas pela França.",
            total: "Cerca de 60.000 mortos no total, incluindo militares e civis."
        },
        keyFigures: [
            {
                name: "Luís XIV",
                role: "Rei da França",
                side: "França",
                fate: "Luís XIV conseguiu vitórias iniciais, mas a guerra se prolongou e a resistência dos Países Baixos forçou negociações de paz em Nijmegen."
            },
            {
                name: "Guillermo III de Orange",
                role: "Príncipe de Orange",
                side: "Países Baixos",
                fate: "Guillermo III teve um papel crucial na liderança das forças holandesas e na formação de alianças com a Inglaterra."
            },
            {
                name: "Charles II da Inglaterra",
                role: "Rei da Inglaterra",
                side: "Inglaterra",
                fate: "A Inglaterra se aliou aos Países Baixos, ajudando a conter a expansão francesa, embora com interesses próprios na guerra."
            }
        ],
        winners: [
            {
                name: "Países Baixos",
                country: "República das Sete Províncias Unidas",
                side: "Países Baixos",
                date: "1678-08-10"
            },
            {
                name: "França",
                country: "França",
                side: "França",
                date: "1678-08-10"
            }
        ]
    },
    {
        id: "glorious-revolution-1688",
        year: 1688,
        title: "Revolução Gloriosa",
        description: "A Revolução Gloriosa de 1688 foi um evento crucial na história da Inglaterra, que resultou na deposição de Jaime II e na ascensão de Maria II e Guilherme III de Orange ao trono inglês. A revolução foi praticamente sem violência, caracterizando-se como um golpe de Estado que fortaleceu a autoridade do parlamento e reduziu o poder absoluto da monarquia. Este evento teve profundas repercussões, influenciando a política e as instituições britânicas.",
        mediaPortrayal: "A Revolução Gloriosa foi amplamente retratada como um movimento legítimo em defesa da liberdade e da religião, com a imprensa e os panfletos promovendo a narrativa de que a substituição de Jaime II era necessária para preservar a estabilidade política e religiosa da Inglaterra.",
        propaganda: {
            sides: [
                {
                    name: "Protestantes e Parlamentares",
                    slogans: [
                        "Defesa da Liberdade",
                        "Poder ao Parlamento",
                        "Religião Protestante no Trono"
                    ],
                    mediaOutlets: [
                        "Jornais Whig",
                        "Panfletos",
                        "Cartazes de propaganda política"
                    ],
                    techniques: [
                        "Exaltação da intolerância religiosa de Jaime II",
                        "Apelo à unidade protestante",
                        "Promoção do direito do parlamento ao governo"
                    ]
                },
                {
                    name: "Jaime II e seus partidários",
                    slogans: [
                        "Defesa da Monarquia Absolutista",
                        "Lealdade ao Trono",
                        "Resistência ao Parlamento"
                    ],
                    mediaOutlets: [
                        "Jornais Tory",
                        "Cartazes de apoio ao rei"
                    ],
                    techniques: [
                        "Apelo à tradição monárquica",
                        "Desconfiança em relação à interferência estrangeira",
                        "Chamada à lealdade real"
                    ]
                }
            ],
            analysis: "A propaganda dos protestantes e parlamentares focou na defesa da religião e da liberdade contra as práticas absolutistas de Jaime II, enquanto os monarquistas tentaram defender a autoridade divina do rei, argumentando que sua deposição era uma violação dos direitos do monarca."
        },
        theories: [
            {
                title: "Transição pacífica de poder",
                description: "A Revolução Gloriosa é frequentemente descrita como uma revolução sem sangue, em grande parte porque a transição de poder ocorreu sem grandes conflitos armados.",
                evidence: "O apoio crescente à causa protestante e a falta de oposição militar significativa garantiram que a revolução fosse pacífica, com o exército de Jaime II se recusando a lutar contra os novos governantes."
            },
            {
                title: "Reforço do poder do parlamento",
                description: "Uma das consequências mais significativas da Revolução Gloriosa foi o fortalecimento da autoridade parlamentar e a limitação do poder monárquico.",
                evidence: "O Bill of Rights de 1689, que estabeleceu limites à monarquia, garantiu liberdades fundamentais e aumentou o controle do parlamento sobre o governo."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/SA_4973-Anno_1689._De_kroning_van_Willem_III_en_Maria_Stuart.jpg",
        relatedNews: [
            {
                title: "Jaime II deposto",
                description: "O rei Jaime II é deposto após a fuga para a França e Maria II e Guilherme III assumem o trono da Inglaterra.",
                source: "Crônicas da Revolução Gloriosa",
                date: "1688-12-11"
            },
            {
                title: "Bill of Rights (1689)",
                description: "O Bill of Rights foi promulgado, garantindo a supremacia do parlamento sobre a monarquia e estabelecendo direitos fundamentais.",
                source: "Legislação inglesa",
                date: "1689-02-13"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Banco de Inglaterra",
                    country: "Inglaterra",
                    assets: "Fundado em 1694 após a Revolução Gloriosa para estabilizar as finanças do governo",
                    amount: "O banco foi criado para fornecer empréstimos ao governo, essencialmente visando garantir a estabilidade financeira após a revolução.",
                    currency: "Libra Esterlina",
                    owners: [
                        {
                            name: "Parlamento da Inglaterra",
                            religion: "Protestante",
                            politicalAffiliation: "Parlamentarista"
                        }
                    ],
                    side: "Protestantes e Parlamentares"
                }
            ],
            financiers: [
                {
                    name: "Parlamento da Inglaterra",
                    type: "government",
                    amount: "Financiamento da Revolução por meio de empréstimos e a criação do Banco da Inglaterra.",
                    assets: "O parlamento utilizou a recém-formada estabilidade financeira para consolidar o poder político.",
                    religion: "Protestante",
                    currency: "Libra Esterlina",
                    side: "Protestantes e Parlamentares"
                }
            ],
            financialImpact: "A criação do Banco de Inglaterra foi uma das principais respostas financeiras à revolução, garantindo recursos estáveis para o governo, além de ser um marco no desenvolvimento do sistema financeiro britânico."
        },
        casualties: {
            military: "Embora a revolução tenha sido em grande parte pacífica, houve algumas baixas devido aos confrontos iniciais e à resistência de partidários de Jaime II.",
            civilian: "Poucas baixas civis ocorreram, principalmente em áreas de confronto, como em alguns episódios de violência durante a deposição de Jaime II.",
            total: "A revolução teve um número relativamente baixo de baixas, com cerca de 300 mortos entre militares e civis."
        },
        keyFigures: [
            {
                name: "Jaime II",
                role: "Rei da Inglaterra",
                side: "Monarquistas",
                fate: "Jaime II fugiu para a França após ser deposto, terminando seu reinado na exílio."
            },
            {
                name: "Maria II",
                role: "Rainha da Inglaterra",
                side: "Protestantes e Parlamentares",
                fate: "Maria II assumiu o trono com seu marido Guilherme III, governando junto dele."
            },
            {
                name: "Guilherme III de Orange",
                role: "Rei da Inglaterra",
                side: "Protestantes e Parlamentares",
                fate: "Guilherme III tornou-se co-monarca, sendo fundamental na deposição de Jaime II e na implementação de um sistema de governo mais constitucional."
            }
        ],
        winners: [
            {
                name: "Maria II e Guilherme III",
                country: "Inglaterra",
                side: "Protestantes e Parlamentares",
                date: "1688-12-11"
            }
        ]
    },
    {
        id: "eight-years-war-1568",
        year: 1568,
        title: "Guerra dos Oito Anos",
        description: "A Guerra dos Oito Anos foi um conflito entre as Províncias Unidas dos Países Baixos e a Espanha, que fazia parte das maiores revoltas nos Países Baixos contra o domínio espanhol. A guerra foi travada principalmente pela independência das províncias que, ao longo do tempo, se tornaram a República das Sete Províncias Unidas. O conflito terminou com o reconhecimento da independência das províncias após a assinatura da Paz de Westfália em 1648.",
        mediaPortrayal: "A guerra foi retratada como uma luta pela liberdade contra o autoritarismo do rei espanhol, com diversos panfletos e publicações nas províncias revoltosas promovendo a ideia da resistência contra a opressão religiosa e política imposta por Filipe II.",
        propaganda: {
            sides: [
                {
                    name: "Províncias Unidas",
                    slogans: [
                        "Liberdade para os Países Baixos",
                        "Independência contra a opressão espanhola",
                        "Direitos das Províncias"
                    ],
                    mediaOutlets: [
                        "Panfletos rebeldes",
                        "Publicações de protesto",
                        "Cartazes de propaganda política"
                    ],
                    techniques: [
                        "Apelo à resistência religiosa e à autonomia política",
                        "Exaltação do combate à tirania de Filipe II",
                        "Convocação das populações locais para resistir à ocupação espanhola"
                    ]
                },
                {
                    name: "Espanha",
                    slogans: [
                        "Defesa da monarquia e da unidade do império",
                        "Religião e ordem sob o controle espanhol",
                        "Unidade sob Filipe II"
                    ],
                    mediaOutlets: [
                        "Imprensa católica",
                        "Comunicados reais",
                        "Cartazes e anúncios oficiais"
                    ],
                    techniques: [
                        "Promoção da unidade religiosa e política sob o domínio espanhol",
                        "Utilização do apoio da Igreja Católica para justificar a repressão",
                        "Apelo à lealdade ao trono espanhol"
                    ]
                }
            ],
            analysis: "A propaganda das Províncias Unidas focou no apelo à autonomia religiosa e política, explorando o descontentamento com as políticas de Filipe II, especialmente em relação à imposição do catolicismo. A Espanha, por sua vez, usou a religião como justificativa para manter a unidade do império, e se baseou na lealdade ao monarca para mobilizar o apoio."
        },
        theories: [
            {
                title: "Resistência contra o absolutismo",
                description: "A Guerra dos Oito Anos é vista como uma luta contra o absolutismo de Filipe II e um esforço pela autonomia das províncias no que se refere à religião e ao governo.",
                evidence: "O ato de união das províncias rebeldes e a resistência de figuras como Guilherme de Orange evidenciam a luta contra o domínio centralizado e a repressão religiosa imposta pela Espanha."
            },
            {
                title: "A independência através da diplomacia",
                description: "Embora o conflito tenha sido armado, a assinatura da Paz de Westfália foi um meio diplomático fundamental para a independência das províncias.",
                evidence: "A Paz de Westfália de 1648 reconheceu a independência das Províncias Unidas, encerrando o conflito e estabelecendo uma nova ordem política na Europa."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Nederlanden_1621-1628-es.svg/800px-Nederlanden_1621-1628-es.svg.png",
        relatedNews: [
            {
                title: "Inicio da Guerra dos Oito Anos",
                description: "O início da guerra com a revolta das províncias contra a Espanha, simbolizando uma luta pela independência e autonomia.",
                source: "Crônicas das Guerras Europeias",
                date: "1568-04-01"
            },
            {
                title: "Paz de Westfália (1648)",
                description: "O acordo que selou o fim da guerra, reconhecendo a independência das Províncias Unidas.",
                source: "História Diplomática da Europa",
                date: "1648-10-24"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Banco da Província de Utrecht",
                    country: "República das Províncias Unidas",
                    assets: "O banco foi fundado após a guerra para estabilizar as finanças da nova república e impulsionar o comércio.",
                    amount: "O financiamento foi em parte baseado em empréstimos da classe mercantil local.",
                    currency: "Guilder",
                    owners: [
                        {
                            name: "Mercadores de Amsterdã",
                            religion: "Protestante",
                            politicalAffiliation: "Republicano"
                        }
                    ],
                    side: "Províncias Unidas"
                }
            ],
            financiers: [
                {
                    name: "República das Províncias Unidas",
                    type: "government",
                    amount: "Investimentos em navios de guerra e defesa",
                    assets: "A república usou fundos públicos e empréstimos para sustentar a guerra contra a Espanha.",
                    religion: "Protestante",
                    currency: "Guilder",
                    side: "Províncias Unidas"
                }
            ],
            financialImpact: "O impacto financeiro foi significativo, com a necessidade de criar uma nova estrutura bancária e comercial para apoiar a guerra e consolidar a independência. A estabilidade financeira da nova república se deveu ao seu crescente poder comercial."
        },
        casualties: {
            military: "Cerca de 100.000 mortos, principalmente devido a batalhas e a repressão militar espanhola.",
            civilian: "O número de civis mortos devido a massacres e conflitos foi significativo, especialmente em cidades fortemente ocupadas.",
            total: "O total de baixas durante a guerra foi estimado em mais de 200.000 pessoas, entre militares e civis."
        },
        keyFigures: [
            {
                name: "Guilherme de Orange",
                role: "Líder das Províncias Unidas",
                side: "Províncias Unidas",
                fate: "Guilherme de Orange desempenhou um papel crucial na liderança da resistência contra os espanhóis, sendo uma figura central na independência das províncias."
            },
            {
                name: "Filipe II",
                role: "Rei da Espanha",
                side: "Espanha",
                fate: "Filipe II tentou suprimir a revolta nas províncias, mas falhou em manter o controle, levando à independência das Províncias Unidas."
            }
        ],
        winners: [
            {
                name: "Províncias Unidas",
                country: "Países Baixos",
                side: "Províncias Unidas",
                date: "1648-10-24"
            }
        ]
    },
    {
        id: "war-spanish-succession",
        year: 1701,
        title: "Guerra da Sucessão Espanhola",
        description: "Conflito internacional pela sucessão ao trono da Espanha após a morte do rei Carlos II sem herdeiros diretos.",
        mediaPortrayal: "Frequentemente retratada como uma guerra dinástica, a cobertura midiática histórica minimiza frequentemente os interesses econômicos e comerciais envolvidos.",
        propaganda: {
            sides: [
                {
                    name: "França",
                    slogans: [
                        "Pela glória da França!",
                        "Direito legítimo ao trono espanhol"
                    ],
                    mediaOutlets: [
                        "Gazette de France"
                    ],
                    techniques: [
                        "Apelo à legitimidade dinástica",
                        "Demonização dos Habsburgos"
                    ]
                },
                {
                    name: "Grã-Bretanha e Aliados",
                    slogans: [
                        "Equilíbrio de poder na Europa",
                        "Contra a hegemonia francesa"
                    ],
                    mediaOutlets: [
                        "The London Gazette"
                    ],
                    techniques: [
                        "Medo do domínio francês",
                        "Apelo à liberdade dos povos"
                    ]
                }
            ],
            analysis: "A propaganda de ambos os lados enfatizava a legitimidade e o equilíbrio de poder, ocultando interesses econômicos e coloniais."
        },
        theories: [
            {
                title: "Equilíbrio de Poder",
                description: "As potências europeias entraram em guerra para evitar que a França se tornasse demasiado poderosa.",
                evidence: "Alianças formadas e tratados diplomáticos da época."
            },
            {
                title: "Motivações Comerciais",
                description: "Interesses comerciais nas Américas foram a verdadeira motivação por trás do conflito.",
                evidence: "Disputas por colônias e rotas comerciais."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Final_War_of_the_Spanish_Succession_Collage.jpg",
        relatedNews: [
            {
                title: "Tratado de Utrecht redefine fronteiras coloniais",
                description: "O tratado de 1713 encerra a guerra e redistribui territórios na América e Europa.",
                source: "Arquivo Nacional da França",
                date: "1713-04-11"
            }
        ],
        financialInfo: {
            financialImpact: "The war had significant economic consequences for all parties involved",
            banks: [
                {
                    name: "Bank of England",
                    country: "Great Britain",
                    owners: [
                        {
                            name: "William Paterson",
                            religion: "Protestant",
                            politicalAffiliation: "Whig"
                        },
                        {
                            name: "Michael Godfrey",
                            religion: "Protestant"
                        }
                    ]
                },
                {
                    name: "Banque Générale",
                    country: "France",
                    owners: [
                        {
                            name: "John Law",
                            religion: "Catholic"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "British Crown Treasury",
                    type: "government",
                    side: "Great Britain"
                },
                {
                    name: "Dutch East India Company",
                    type: "corporation",
                    side: "Netherlands"
                }
            ]
        }
    },
    {
        id: "seven-years-war",
        year: 1756,
        title: "Guerra dos Sete Anos",
        description: "Conflito global envolvendo as principais potências europeias, muitas vezes considerada a primeira 'guerra mundial'. Envolveu a Grã-Bretanha e Prússia contra França, Áustria, Rússia e outros aliados, com batalhas ocorrendo na Europa, América do Norte, Índia e áreas coloniais.",
        mediaPortrayal: "Frequentemente simplificada como um conflito entre França e Inglaterra, quando na verdade envolveu múltiplos teatros de operação em todo o mundo. A mídia da época, através de panfletos e jornais, retratava o conflito de acordo com interesses nacionais específicos.",
        propaganda: {
            sides: [
                {
                    name: "Grã-Bretanha e Prússia",
                    slogans: [
                        "Defesa da liberdade",
                        "Contra o absolutismo francês"
                    ],
                    mediaOutlets: [
                        "The London Chronicle"
                    ],
                    techniques: [
                        "Demonização dos franceses",
                        "Exaltação do progresso britânico",
                        "Apelo ao imperialismo"
                    ]
                },
                {
                    name: "França e Aliados",
                    slogans: [
                        "Resistência à agressão britânica",
                        "Pela honra da França"
                    ],
                    mediaOutlets: [
                        "Gazette de France"
                    ],
                    techniques: [
                        "Apelo ao nacionalismo",
                        "Propaganda anti-britânica",
                        "Enfatizando a luta pela liberdade"
                    ]
                }
            ],
            analysis: "A propaganda foi uma ferramenta crucial para justificar e fortalecer o apoio público aos esforços de guerra, explorando tanto o medo quanto o orgulho nacional."
        },
        theories: [
            {
                title: "Revolução Militar",
                description: "Novas táticas e tecnologias, como o uso de rifles de carregamento rápido e estratégias de guerra em larga escala, testadas durante este conflito, revolucionaram a forma como as guerras seriam travadas posteriormente."
            },
            {
                title: "Domínio Britânico Global",
                description: "Esta guerra estabeleceu as fundações para o posterior domínio britânico global, especialmente no que diz respeito às suas colônias na América do Norte e na Índia.",
                evidence: "O Tratado de Paris de 1763 resultou na cessão de territórios estratégicos à Grã-Bretanha, consolidando sua posição como potência imperial."
            },
            {
                title: "Conspiração Diplomática",
                description: "Prússia e Grã-Bretanha planejaram deliberadamente provocar o conflito para redistribuir o poder na Europa, com foco na redução da influência francesa."
            },
            {
                title: "Influência Maçônica",
                description: "A influência maçônica na formação das alianças, especialmente considerando a ligação de Federico II da Prússia com a maçonaria e a presença de maçons importantes entre os líderes europeus da época.",
                evidence: "Frederico II da Prússia foi um membro ativo da maçonaria, e sua associação com a ordem maçônica desempenhou um papel estratégico nas suas políticas e alianças durante a guerra."
            },
            {
                title: "Impacto Econômico Global",
                description: "A guerra gerou enormes dívidas para as potências envolvidas, cujos efeitos se espalharam globalmente, afetando economias e provocando um ciclo de instabilidade financeira.",
                evidence: "A guerra aumentou significativamente os impostos nas potências vitoriosas, levando à instabilidade financeira, especialmente na França e na Grã-Bretanha."
            }
        ],
        image: "https://cdn.britannica.com/69/211669-050-8EFA2393/Frederick-II-troops-Prussian-Battle-of-Zorndorf-August-25-1758.jpg",
        relatedNews: [
            {
                title: "Tratado de Paris (1763) estabelece nova ordem colonial global",
                description: "O tratado de paz que encerrou a Guerra dos Sete Anos redefiniu as fronteiras coloniais globais e fortaleceu a Grã-Bretanha como a maior potência imperial.",
                source: "Arquivos Históricos",
                date: "1763-02-10"
            },
            {
                title: "Prússia emerge como potência militar europeia após vitórias decisivas",
                description: "Após uma série de batalhas cruciais, a Prússia estabeleceu-se como uma das principais forças militares da Europa.",
                source: "Registros Militares Prussianos",
                date: "1763"
            },
            {
                title: "Dívidas de guerra da França contribuem para a Revolução Francesa",
                description: "As enormes dívidas contraídas durante a guerra enfraqueceram significativamente as finanças francesas, contribuindo para a crise econômica que ajudou a desencadear a Revolução Francesa.",
                source: "Registros Históricos Financeiros",
                date: "1763"
            },
            {
                title: "Massacre de Jumonville Glen marca início das hostilidades na América do Norte",
                description: "O confronto entre forças francesas e britânicas em Jumonville Glen iniciou formalmente as hostilidades na América do Norte.",
                source: "Registros Históricos Coloniais",
                date: "1754-05-28"
            }
        ],
        financialInfo: {
            financialImpact: "A Guerra dos Sete Anos teve grandes consequências financeiras, com enormes dívidas de guerra para as potências europeias, especialmente França e Grã-Bretanha. Isso levou ao aumento da tributação e à instabilidade financeira nas décadas seguintes.",
            banks: [
                {
                    name: "Bank of England",
                    country: "Inglaterra",
                    assets: "Desconhecido",
                    amount: "Empréstimos massivos para financiar a guerra",
                    currency: "Libra Esterlina",
                    owners: [
                        {
                            name: "William Barrington",
                            religion: "Protestante",
                            politicalAffiliation: "Whig"
                        },
                        {
                            name: "George Grenville",
                            religion: "Anglicano",
                            politicalAffiliation: "Whig"
                        }
                    ],
                    side: "Grã-Bretanha"
                },
                {
                    name: "Preußische Bank",
                    country: "Prússia",
                    assets: "Desconhecido",
                    amount: "Financiamento significativo para a guerra",
                    currency: "Taler Prussiano",
                    owners: [
                        {
                            name: "Johann Ernst Gotzkowsky",
                            religion: "Protestante",
                            politicalAffiliation: "Independente"
                        }
                    ],
                    side: "Prússia"
                },
                {
                    name: "Banque Royale de France",
                    country: "França",
                    assets: "Desconhecido",
                    amount: "Massiva dívida de guerra",
                    currency: "Livre Francês",
                    owners: [
                        {
                            name: "Étienne de Silhouette",
                            religion: "Católico",
                            politicalAffiliation: "Independente"
                        },
                        {
                            name: "Henri Bertin",
                            religion: "Católico",
                            politicalAffiliation: "Independente"
                        }
                    ],
                    side: "França"
                }
            ],
            financiers: [
                {
                    name: "Casa Rothschild",
                    type: "organization",
                    side: "Múltiplos",
                    amount: "Desconhecido",
                    currency: "Múltiplas",
                    assets: "Desconhecido",
                    religion: "Judaísmo"
                },
                {
                    name: "Banqueiros Judeus de Amsterdam",
                    type: "organization",
                    side: "Múltiplos",
                    amount: "Desconhecido",
                    currency: "Florim Neerlandês",
                    assets: "Desconhecido",
                    religion: "Judaísmo"
                },
                {
                    name: "East India Company",
                    type: "corporation",
                    side: "Grã-Bretanha",
                    amount: "Desconhecido",
                    currency: "Libra Esterlina",
                    assets: "Desconhecido",
                    religion: "Protestante"
                },
                {
                    name: "Compagnie des Indes",
                    type: "corporation",
                    side: "França",
                    amount: "Desconhecido",
                    currency: "Livre Francês",
                    assets: "Desconhecido",
                    religion: "Católico"
                }
            ]
        },
        casualties: {
            military: "200.000 (Estimativa Total)",
            civilian: "100.000 (Estimativa)",
            total: "300.000 (Estimativa Total)"
        },
        keyFigures: [
            {
                name: "Frederico II da Prússia",
                role: "Rei da Prússia",
                side: "Prússia",
                fate: "Viveu após a guerra e consolidou a posição da Prússia como potência militar."
            },
            {
                name: "George II da Grã-Bretanha",
                role: "Rei da Grã-Bretanha",
                side: "Grã-Bretanha",
                fate: "Viveu após a guerra, mas sua política foi enfraquecida pela dívida de guerra."
            },
            {
                name: "Louis XV da França",
                role: "Rei da França",
                side: "França",
                fate: "Viveu após a guerra, mas sua gestão foi criticada por levar a França à bancarrota."
            }
        ],
        winners: [
            {
                name: "Grã-Bretanha",
                country: "Reino Unido",
                side: "Grã-Bretanha",
                date: "1763"
            }
        ],
        masons: [
            {
                name: "Frederico II da Prússia",
                affiliation: "Loja Maçônica de Berlim",
                religion: "Protestante",
                position: "Rei da Prússia",
                country: "Prússia",
                activeYears: {
                    fromYear: 1739,
                    toYear: 1786
                }
            },
            {
                name: "George Washington",
                affiliation: "Maçom da Virgínia",
                religion: "Anglicano",
                position: "Comandante em Chefe do Exército Continental",
                country: "Estados Unidos",
                activeYears: {
                    fromYear: 1752,
                    toYear: 1799
                }
            }
        ],
        timePeriod: "1756-1763",
        relatedEvents: "Guerra da Independência dos EUA, Guerra Franco-Indígena"
    },
    {
        id: "american-revolution",
        year: 1775,
        title: "Revolução Americana",
        description: "Guerra de independência das colônias americanas contra o Império Britânico, resultando na formação dos Estados Unidos da América.",
        mediaPortrayal: "A narrativa tradicional enfatiza a luta pela liberdade e democracia, frequentemente omitindo o papel crucial dos interesses comerciais e financeiros na revolução.",
        propaganda: {
            sides: [
                {
                    name: "Colônias Americanas",
                    slogans: [
                        "No taxation without representation",
                        "Liberdade ou morte"
                    ],
                    mediaOutlets: [
                        "Pennsylvania Gazette"
                    ],
                    techniques: [
                        "Apelo à liberdade",
                        "Demonização do rei britânico"
                    ]
                },
                {
                    name: "Império Britânico",
                    slogans: [
                        "Unidade do Império",
                        "Ordem e lei"
                    ],
                    mediaOutlets: [
                        "The London Gazette"
                    ],
                    techniques: [
                        "Deslegitimação dos rebeldes",
                        "Apelo à tradição"
                    ]
                }
            ],
            analysis: "A propaganda revolucionária americana foi fundamental para mobilizar apoio popular, enquanto a britânica buscava manter a ordem imperial."
        },
        theories: [
            {
                title: "Conspiração Maçônica",
                description: "Os Fundadores dos EUA, muitos deles maçons, planejaram a revolução como parte de um plano maior.",
                evidence: "Documentos históricos mostram a conexão entre as sociedades secretas e os líderes da revolução."
            },
            {
                title: "Financiamento Europeu",
                description: "Banqueiros europeus financiaram a revolução para enfraquecer o domínio britânico.",
                evidence: "Os registros de transações financeiras mostram o envolvimento de várias casas bancárias europeias no apoio às colônias."
            },
            {
                title: "Rothschild financiando ambos os lados",
                description: "A Casa de Rothschild lucrou com a guerra financiando ambos os lados do conflito.",
                evidence: "Documentos bancários revelam transações que indicam o envolvimento da Casa de Rothschild no financiamento de ambos os lados da guerra."
            },
            {
                title: "A Teoria do Colapso do Império Britânico",
                description: "A Revolução Americana foi o início do declínio do Império Britânico, sinalizando uma mudança na ordem mundial.",
                evidence: "A perda das colônias foi um golpe significativo para o poder imperial britânico, que levou a mudanças em sua estratégia global."
            },
            {
                title: "Teoria da Economia de Guerra",
                description: "Os interesses comerciais e financeiros das colônias estavam tão entrelaçados com as potências europeias que a revolução pode ter sido impulsionada por interesses econômicos.",
                evidence: "Registros de comerciantes da época mostram que muitas das decisões militares estavam ligadas a interesses econômicos, incluindo o controle de rotas comerciais."
            },
            {
                title: "Teoria do Impulso da Maçonaria",
                description: "Os maçons dos Estados Unidos estavam por trás de boa parte da estruturação do novo governo.",
                evidence: "Documentos revelam a participação ativa de maçons em eventos importantes e na criação dos fundamentos da nova república."
            }
        ],
        image: "https://cdn.britannica.com/23/143623-050-3708C6A4/Surrender-of-Lord-Cornwallis-canvas-John-Laurens-1820.jpg",
        relatedNews: [
            {
                title: "Morte suspeita de vários líderes revolucionários após a independência",
                description: "Diversos líderes revolucionários morreram em circunstâncias suspeitas nos anos seguintes à independência americana",
                source: "Registros Históricos",
                date: "1776-1800"
            },
            {
                title: "Documentos revelam conexões entre revolucionários e banqueiros europeus",
                description: "Novos documentos históricos mostram ligações financeiras entre líderes revolucionários e instituições bancárias europeias",
                source: "Arquivos Históricos Nacionais",
                date: "1776"
            },
            {
                title: "Papel da maçonaria na formação do governo americano",
                description: "Documentos históricos revelam a extensa influência maçônica na estruturação do governo dos Estados Unidos",
                source: "Arquivos Históricos Nacionais",
                date: "1776"
            },
            {
                title: "Guerra no Canadá e no Caribe",
                description: "As forças britânicas enfrentam dificuldades em vários teatros de guerra, incluindo o Canadá e as ilhas do Caribe.",
                source: "The London Gazette",
                date: "1776-1783"
            },
            {
                title: "Intervenção Francesa",
                description: "O apoio militar francês foi crucial para a vitória americana, mas também visava enfraquecer a Grã-Bretanha.",
                source: "Le Moniteur Universel",
                date: "1778"
            },
            {
                title: "Declaração de Independência e o Mundo",
                description: "A Revolução Americana serviu de inspiração para outras revoluções ao redor do mundo, incluindo a Revolução Francesa.",
                source: "Pennsylvania Gazette",
                date: "1776"
            }
        ],
        financialInfo: {
            financialImpact: "A Revolução Americana teve grandes consequências financeiras, incluindo o estabelecimento de novos sistemas bancários e moeda nos Estados Unidos.",
            banks: [
                {
                    name: "Bank of North America",
                    country: "United States",
                    assets: "Desconhecido",
                    amount: "Desconhecido",
                    currency: "Continental Dollar",
                    owners: [
                        {
                            name: "Robert Morris",
                            type: "individual",
                            religion: "Protestant",
                            politicalAffiliation: "Independent",
                            president: {
                                name: "Robert Morris",
                                religion: "Protestant",
                                fromYear: 1775,
                                toYear: 1790
                            }
                        },
                        {
                            name: "Thomas Willing",
                            type: "individual",
                            religion: "Quaker",
                            politicalAffiliation: "Independent",
                            president: {
                                name: "Thomas Willing",
                                religion: "Quaker",
                                fromYear: 1775,
                                toYear: 1793
                            }
                        }
                    ],
                    side: "United States"
                },
                {
                    name: "Bank of England",
                    country: "England",
                    assets: "Desconhecido",
                    amount: "Desconhecido",
                    currency: "Pound Sterling",
                    owners: [
                        {
                            name: "Sir Richard Neave",
                            type: "individual",
                            religion: "Anglican",
                            politicalAffiliation: "Conservative",
                            president: {
                                name: "Sir Richard Neave",
                                religion: "Anglican",
                                fromYear: 1776,
                                toYear: 1783
                            }
                        }
                    ],
                    side: "Império Britânico"
                }
            ],
            financiers: [
                {
                    name: "Casa Rothschild",
                    type: "organization",
                    amount: "Desconhecido",
                    assets: "Desconhecido",
                    religion: "Jewish",
                    currency: "Multiple",
                    side: "Both",
                    president: {
                        name: "Mayer Amschel Rothschild",
                        religion: "Jewish",
                        fromYear: 1775,
                        toYear: 1790
                    }
                },
                {
                    name: "Banqueiros Holandeses",
                    type: "organization",
                    amount: "Desconhecido",
                    assets: "Desconhecido",
                    religion: "Protestant",
                    currency: "Dutch Guilder",
                    side: "Both",
                    president: {
                        name: "Cornelis de Graeff",
                        religion: "Protestant",
                        fromYear: 1775,
                        toYear: 1790
                    }
                },
                {
                    name: "Mercadores Franceses",
                    type: "organization",
                    amount: "Desconhecido",
                    assets: "Desconhecido",
                    religion: "Catholic",
                    currency: "French Livre",
                    side: "France",
                    president: {
                        name: "Jacques Necker",
                        religion: "Protestant",
                        fromYear: 1776,
                        toYear: 1781
                    }
                },
                {
                    name: "Haym Solomon",
                    type: "individual",
                    amount: "Desconhecido",
                    assets: "Desconhecido",
                    religion: "Jewish",
                    currency: "Continental Dollar",
                    side: "United States",
                    president: {
                        name: "George Washington",
                        religion: "Protestant",
                        fromYear: 1789,
                        toYear: 1797
                    }
                }
            ]
        },
        casualties: {
            military: "~35000 both",
            civilian: "~50000",
            total: "70-80k"
        },
        keyFigures: [
            {
                name: "George Washington",
                role: "Comandante em Chefe",
                side: "United States",
                fate: "Vencedor"
            },
            {
                name: "King George III",
                role: "Rei",
                side: "Império Britânico",
                fate: "Derrotado"
            },
            {
                name: "Thomas Jefferson",
                role: "Autor da Declaração de Independência",
                side: "United States",
                fate: "Vencedor"
            }
        ],
        winners: [
            {
                name: "United States of America",
                country: "United States",
                side: "United States",
                date: "1783"
            }
        ],
        masons: [
            {
                name: "George Washington",
                affiliation: "Maçom da Loja Alexandria",
                religion: "Protestante",
                position: "Venerável Mestre",
                country: "United States",
                activeYears: {
                    fromYear: 1752,
                    toYear: 1799
                }
            },
            {
                name: "Benjamin Franklin",
                affiliation: "Maçom da Loja St. John",
                religion: "Deísmo",
                position: "Venerável Mestre",
                country: "United States",
                activeYears: {
                    fromYear: 1731,
                    toYear: 1790
                }
            },
            {
                name: "Voltaire",
                affiliation: "Grande Loja de França",
                religion: "Deísmo",
                position: "Membro Honorário",
                country: "France",
                activeYears: {
                    fromYear: 1735,
                    toYear: 1778
                }
            },
            {
                name: "Winston Churchill",
                affiliation: "Maçom da Loja Phoenix",
                religion: "Anglicanismo",
                position: "Membro",
                country: "United Kingdom",
                activeYears: {
                    fromYear: 1901,
                    toYear: 1965
                }
            },
            {
                name: "Napoleon Bonaparte",
                affiliation: "Maçom da Loja Les Neuf Sœurs",
                religion: "Católica (mas deístas em suas crenças pessoais)",
                position: "Membro Honorário",
                country: "France",
                activeYears: {
                    fromYear: 1798,
                    toYear: 1815
                }
            },
            {
                name: "Mark Twain",
                affiliation: "Maçom da Loja Polar Star",
                religion: "Deísmo",
                position: "Membro",
                country: "United States",
                activeYears: {
                    fromYear: 1861,
                    toYear: 1910
                }
            },
            {
                name: "Arthur Conan Doyle",
                affiliation: "Maçom da Loja Phoenix",
                religion: "Protestante",
                position: "Membro",
                country: "United Kingdom",
                activeYears: {
                    fromYear: 1887,
                    toYear: 1930
                }
            },
            {
                name: "Harry S. Truman",
                affiliation: "Maçom da Loja Grandview",
                religion: "Metodista",
                position: "Venerável Mestre",
                country: "United States",
                activeYears: {
                    fromYear: 1909,
                    toYear: 1972
                }
            },
            {
                name: "Louis Armstrong",
                affiliation: "Maçom da Loja Benevolent Lodge No. 37",
                religion: "Protestante",
                position: "Membro",
                country: "United States",
                activeYears: {
                    fromYear: 1934,
                    toYear: 1971
                }
            },
            {
                name: "Giuseppe Garibaldi",
                affiliation: "Maçom da Loja Nacional Italiana",
                religion: "Católica",
                position: "Membro Honorário",
                country: "Italy",
                activeYears: {
                    fromYear: 1835,
                    toYear: 1882
                }
            }
        ]
    },
    {
        id: "french-revolution",
        year: 1789,
        title: "Revolução Francesa",
        description: "A Revolução Francesa foi um período de grande turbulência política e social que resultou na queda da monarquia absoluta e na ascensão da república na França. Marcada por lutas entre diferentes facções políticas e sociais, a revolução levou à execução do rei Luís XVI e à instalação de um regime republicano.",
        mediaPortrayal: "A revolução foi retratada de formas diferentes ao longo do tempo, com as ideias de liberdade, igualdade e fraternidade sendo exaladas por simpatizantes, enquanto os opositores enfatizavam a violência e o caos.",
        propaganda: {
            sides: [
                {
                    name: "Revolucionários",
                    slogans: [
                        "Liberdade, Igualdade, Fraternidade",
                        "Viva a República!"
                    ],
                    mediaOutlets: [
                        "L'Ami du peuple",
                        "Le Moniteur"
                    ],
                    techniques: [
                        "Apelo à virtude republicana",
                        "Demonização da monarquia e do clero",
                        "Exaltação da virtude cívica"
                    ]
                },
                {
                    name: "Monarquistas e Contra-Revolucionários",
                    slogans: [
                        "Viva o Rei!",
                        "Deus, honra e monarquia"
                    ],
                    mediaOutlets: [
                        "Journal des Débats",
                        "Gazette de France"
                    ],
                    techniques: [
                        "Apelo à ordem e estabilidade",
                        "Demonização dos revolucionários",
                        "Enfatizando o caos da revolução"
                    ]
                }
            ],
            analysis: "A propaganda desempenhou um papel crucial ao polarizar a opinião pública e justificar a violência revolucionária, enquanto ao mesmo tempo a oposição tentava salvar a monarquia e a ordem social anterior."
        },
        theories: [
            {
                title: "Conspiração Maçônica",
                description: "Existem teorias que sugerem que maçons influenciaram e até orquestraram partes da Revolução Francesa, especialmente no que diz respeito à queda da monarquia e ao estabelecimento da república.",
                evidence: "Líderes da revolução, como Maximilien Robespierre e Georges Danton, eram conhecidos por suas ligações com a maçonaria."
            },
            {
                title: "Revolução Econômica",
                description: "A grave crise financeira e os altos impostos levaram à queda da monarquia, exacerbando a situação das classes mais baixas, o que por sua vez impulsionou o movimento revolucionário."
            },
            {
                title: "Ascensão do Terror",
                description: "O período do Terror, com a execução de milhares de supostos inimigos da revolução, foi uma resposta ao medo de contrarrevoluções e de intervenções externas."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/French_revolution.jpg",
        relatedNews: [
            {
                title: "Queda da Bastilha marca o início da Revolução",
                description: "Em 14 de julho de 1789, o povo de Paris tomou a Bastilha, símbolo do poder real, marcando o início da Revolução Francesa.",
                source: "Arquivos Históricos",
                date: "1789-07-14"
            },
            {
                title: "Execução de Luís XVI",
                description: "O rei Luís XVI foi executado em 1793, após ser condenado por traição, simbolizando o fim da monarquia francesa.",
                source: "Registros da Revolução",
                date: "1793-01-21"
            },
            {
                title: "Reinado de Terror sob Robespierre",
                description: "Durante o Reinado de Terror, sob a liderança de Robespierre, milhares de pessoas foram executadas na guilhotina.",
                source: "Registros Históricos",
                date: "1793-1794"
            },
            {
                title: "Napoleão Bonaparte assume o poder",
                description: "Em 1799, Napoleão Bonaparte deu um golpe de estado e assumiu o poder, encerrando a Revolução e iniciando o Império.",
                source: "Registros Napoleônicos",
                date: "1799-11-09"
            }
        ],
        financialInfo: {
            financialImpact: "A Revolução Francesa teve um impacto financeiro profundo na França, com enormes dívidas de guerra acumuladas após a luta pela independência dos Estados Unidos. A revolução também resultou em uma reestruturação da economia, com a confiscação de bens da Igreja e da nobreza.",
            banks: [
                {
                    name: "Caisse d'Escompte",
                    country: "France",
                    owners: [
                        {
                            name: "Jacques Necker",
                            religion: "Protestant"
                        }
                    ]
                },
                {
                    name: "Banque de France",
                    country: "France",
                    owners: [
                        {
                            name: "Napoleon Bonaparte",
                            religion: "Catholic"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Casa Rothschild",
                    type: "organization",
                    side: "Múltiplos",
                    amount: "Desconhecido",
                    currency: "Múltiplas",
                    assets: "Desconhecido",
                    religion: "Judaísmo"
                },
                {
                    name: "Banqueiros holandeses",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Dutch Guilder"
                },
                {
                    name: "Banqueiros suíços",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Swiss Franc"
                },
                {
                    name: "Banqueiros de Paris",
                    type: "organization",
                    side: "Monarquistas",
                    amount: "Desconhecido",
                    currency: "Franco Francês",
                    assets: "Desconhecido",
                    religion: "Catolicismo"
                },
                {
                    name: "East India Company",
                    type: "corporation",
                    side: "França",
                    amount: "Desconhecido",
                    currency: "Franco Francês",
                    assets: "Desconhecido",
                    religion: "Protestante"
                }
            ]
        },
        casualties: {
            military: "300.000 (Estimativa Total)",
            civilian: "200.000 (Estimativa)",
            total: "500.000 (Estimativa Total)"
        },
        keyFigures: [
            {
                name: "Maximilien Robespierre",
                role: "Líder Revolucionário",
                side: "Revolucionários",
                fate: "Executado durante o Termidoriano"
            },
            {
                name: "Georges Danton",
                role: "Líder Revolucionário",
                side: "Revolucionários",
                fate: "Executado"
            },
            {
                name: "Louis XVI",
                role: "Rei da França",
                side: "Monarquia",
                fate: "Executado"
            }
        ],
        winners: [
            {
                name: "Revolucionários",
                country: "França",
                side: "Revolucionários",
                date: "1799"
            }
        ],
        masons: [
            {
                name: "Maximilien Robespierre",
                affiliation: "Loja Maçônica de Arras",
                religion: "Deísta",
                position: "Líder Revolucionário",
                country: "França",
                activeYears: {
                    fromYear: 1789,
                    toYear: 1794
                }
            },
            {
                name: "Georges Danton",
                affiliation: "Loja Maçônica de Paris",
                religion: "Católico",
                position: "Líder Revolucionário",
                country: "França",
                activeYears: {
                    fromYear: 1790,
                    toYear: 1794
                }
            }
        ],
        timePeriod: "1789-1799",
        relatedEvents: "Reinado de Terror, ascensão de Napoleão Bonaparte"
    },
    {
        id: "napoleonic-wars",
        year: 1803,
        title: "Guerras Napoleônicas",
        description: "Série de conflitos liderados por Napoleão Bonaparte que remodelaram o mapa político europeu e estabeleceram novas dinâmicas de poder global.",
        mediaPortrayal: "As narrativas variam drasticamente dependendo da perspectiva nacional, com diferentes interpretações sobre o papel de Napoleão e as verdadeiras motivações das guerras.",
        propaganda: {
            sides: [
                {
                    name: "França Napoleônica",
                    slogans: [
                        "Vive l'Empereur!",
                        "Glória à França"
                    ],
                    mediaOutlets: [
                        "Le Moniteur Universel"
                    ],
                    techniques: [
                        "Culto à personalidade",
                        "Exaltação nacionalista"
                    ]
                },
                {
                    name: "Coalizão Europeia",
                    slogans: [
                        "Libertar a Europa de Napoleão",
                        "Pela ordem tradicional"
                    ],
                    mediaOutlets: [
                        "The Times"
                    ],
                    techniques: [
                        "Demonização de Napoleão",
                        "Apelo à tradição"
                    ]
                }
            ],
            analysis: "A propaganda napoleônica construiu uma imagem heroica do imperador, enquanto a coalizão buscava retratá-lo como tirano."
        },
        theories: [
            {
                title: "Envenenamento de Napoleão",
                description: "Napoleão teria sido envenenado em Santa Helena por agentes britânicos."
            },
            {
                title: "Acordos Secretos com Banqueiros",
                description: "Especulações sobre acordos secretos entre Napoleão e banqueiros europeus para financiar suas campanhas militares."
            },
            {
                title: "Manipulação do Ouro",
                description: "Manipulação do mercado de ouro europeu para sustentar esforços de guerra e desestabilizar economias adversárias."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Napoleonic_Wars_%28revision%29.jpg",
        relatedNews: [
            {
                title: "Mortes suspeitas de generais franceses durante a campanha da Rússia",
                description: "Diversas mortes misteriosas de generais franceses durante a desastrosa campanha na Rússia sugerem possíveis traições internas.",
                source: "Registros Históricos Franceses",
                date: "1812"
            },
            {
                title: "Conexões financeiras entre Napoleão e banqueiros internacionais reveladas",
                description: "Novos documentos históricos mostram ligações financeiras entre Napoleão e instituições bancárias de Amsterdã e Londres.",
                source: "Arquivos Históricos Nacionais",
                date: "1806"
            },
            {
                title: "Papel do Banco da Inglaterra no financiamento da coalizão anti-francesa",
                description: "Documentos revelam a influência crucial do Banco da Inglaterra no financiamento das forças da coalizão.",
                source: "Arquivos Históricos Nacionais",
                date: "1805"
            }
        ],
        financialInfo: {
            financialImpact: "As Guerras Napoleônicas causaram enormes redistribuições de riqueza, colapsos financeiros locais e levaram à criação de novas redes bancárias internacionais.",
            banks: [
                {
                    name: "Banque de France",
                    country: "France",
                    assets: "Desconhecido",
                    currency: "Franc francês",
                    owners: [
                        {
                            name: "Napoleon Bonaparte",
                            type: "Government",
                            religion: "Catholic",
                            politicalAffiliation: "Autoritário",
                            president: {
                                name: "Napoleon Bonaparte",
                                religion: "Catholic",
                                fromYear: 1800,
                                toYear: 1815
                            }
                        },
                        {
                            name: "Martin-Michel-Charles Gaudin",
                            type: "Government",
                            religion: "Catholic",
                            politicalAffiliation: "Imperialista",
                            president: {
                                name: "Martin-Michel-Charles Gaudin",
                                religion: "Catholic",
                                fromYear: 1800,
                                toYear: 1814
                            }
                        }
                    ],
                    side: "Private"
                },
                {
                    name: "Bank of England",
                    country: "England",
                    assets: "Desconhecido",
                    currency: "British Pound",
                    owners: [
                        {
                            name: "Henry Thornton",
                            type: "Institutional Investor",
                            religion: "Protestant",
                            politicalAffiliation: "Whig (liberal)",
                            president: {
                                name: "Henry Thornton",
                                religion: "Protestant",
                                fromYear: 1793,
                                toYear: 1815
                            }
                        }
                    ],
                    side: "Private"
                }
            ],
            financiers: [
                {
                    name: "Nathan Rothschild",
                    type: "individual",
                    side: "Both",
                    amount: "Unknown",
                    assets: "Private Wealth",
                    religion: "Judaism",
                    currency: "Multiple",
                    president: {
                        name: "Nathan Mayer Rothschild",
                        religion: "Judaism",
                        fromYear: 1809,
                        toYear: 1836
                    }
                },
                {
                    name: "Ouvrard Banking House",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    assets: "Banking House",
                    religion: "Catholic",
                    currency: "Swiss Franc",
                    president: {
                        name: "Gabriel-Julien Ouvrard",
                        religion: "Catholic",
                        fromYear: 1795,
                        toYear: 1820
                    }
                },
                {
                    name: "Hope & Co. Amsterdam",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    assets: "Merchant Bank",
                    religion: "Protestant",
                    currency: "Dutch Guilder",
                    president: {
                        name: "Henry Hope",
                        religion: "Protestant",
                        fromYear: 1770,
                        toYear: 1811
                    }
                },
                {
                    name: "Baring Brothers",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    assets: "Merchant Bank",
                    religion: "Protestant",
                    currency: "British Pound",
                    president: {
                        name: "Alexander Baring",
                        religion: "Protestant",
                        fromYear: 1803,
                        toYear: 1830
                    }
                }
            ]
        },
        casualties: {
            military: "Entre 2,5 a 3,5 milhões",
            civilian: "Entre 750 mil a 1 milhão",
            total: "Aproximadamente 4 milhões"
        },
        keyFigures: [
            {
                name: "Napoleon Bonaparte",
                role: "Imperador da França e comandante militar",
                side: "França Napoleônica",
                fate: "Exílio e morte em Santa Helena"
            },
            {
                name: "Arthur Wellesley (Duque de Wellington)",
                role: "Comandante da coalizão contra Napoleão",
                side: "Coalizão Europeia",
                fate: "Posteriormente Primeiro-Ministro britânico"
            },
            {
                name: "Horatio Nelson",
                role: "Comandante naval britânico",
                side: "Coalizão Europeia",
                fate: "Morto na Batalha de Trafalgar"
            }
        ],
        winners: [
            {
                name: "Coalizão Europeia",
                country: "Reino Unido, Rússia, Prússia, Áustria",
                side: "Coalizão Europeia",
                date: "1815"
            }
        ]
    },
    {
        id: "crimean-war",
        year: 1853,
        title: "Guerra da Crimeia",
        description: "Conflito entre o Império Russo e uma aliança composta pelo Império Otomano, França, Reino Unido e Sardenha. A guerra teve motivações territoriais, religiosas e políticas, sendo uma das primeiras guerras modernas a envolver cobertura jornalística extensiva.",
        mediaPortrayal: "A primeira guerra a ser amplamente fotografada. As imagens de Roger Fenton moldaram a percepção pública, apesar de muitas cenas serem cuidadosamente encenadas. A imprensa britânica teve papel crucial na formação da opinião pública contra a incompetência logística do comando militar.",
        propaganda: {
            sides: [
                {
                    name: "Império Russo",
                    slogans: [
                        "Proteção dos cristãos ortodoxos",
                        "Russo é a melhor!",
                        "Libertar a Europa"
                    ],
                    mediaOutlets: [
                        "Moskovskie Vedomosti"
                    ],
                    techniques: [
                        "Culto à personalidade",
                        "Exaltação nacionalista",
                        "Apelo religioso"
                    ]
                },
                {
                    name: "Aliança Otomano-Franco-Britânica",
                    slogans: [
                        "Defesa do equilíbrio europeu",
                        "Proteger Constantinopla",
                        "Civilização contra a barbárie"
                    ],
                    mediaOutlets: [
                        "The Times",
                        "Le Moniteur Universel"
                    ],
                    techniques: [
                        "Demonização do inimigo",
                        "Narrativas de civilização",
                        "Uso da imprensa como arma de guerra"
                    ]
                }
            ],
            analysis: "A propaganda foi usada para legitimar o envolvimento das potências europeias, proteger seus interesses no Oriente e mobilizar a opinião pública com base em valores religiosos, civilizatórios e nacionalistas."
        },
        theories: [
            {
                title: "The Great Game Theory",
                description: "A teoria do 'Grande Jogo' sugere que a guerra foi parte de uma competição estratégica entre Grã-Bretanha e Rússia pelo controle da Ásia Central.",
                evidence: "Documentos diplomáticos britânicos e russos revelam preocupações com a influência sobre o Império Otomano e acesso às rotas comerciais para a Índia."
            },
            {
                title: "Guerra evitável por via diplomática",
                description: "Alguns historiadores argumentam que a guerra poderia ter sido evitada através de melhores canais diplomáticos.",
                evidence: "Registros de conferências de Viena e tratados fracassados indicam múltiplas tentativas de resolução pacífica antes do início do conflito armado."
            },
            {
                title: "Desvio de foco interno",
                description: "A guerra teria servido como distração para problemas internos, especialmente no Império Russo e na França sob Napoleão III.",
                evidence: "Crises internas econômicas e sociais foram desviadas com a mobilização militar e a exaltação nacionalista."
            }
        ],
        image: "https://cdn.britannica.com/18/115118-050-E612B6BE/charge-of-the-Light-Brigade-Battle-Balaklava-October-25-1854.jpg",
        relatedNews: [
            {
                title: "Carga da Brigada Ligeira vira símbolo de bravura e desastre militar",
                description: "A desastrosa carga de cavalaria britânica em Balaclava se tornou símbolo da incompetência tática e da coragem soldadesca.",
                source: "The Times",
                date: "1854-10-25"
            },
            {
                title: "Tratado de Paris (1856) encerra a Guerra da Crimeia",
                description: "O tratado de paz impede a presença russa no Mar Negro e reafirma a integridade territorial do Império Otomano.",
                source: "Arquivo Diplomático Europeu",
                date: "1856-03-30"
            },
            {
                title: "Florence Nightingale revoluciona cuidados médicos de guerra",
                description: "A atuação de Florence Nightingale introduz padrões de higiene e tratamento médico moderno nos hospitais de campanha.",
                source: "Registros Médicos Britânicos",
                date: "1855"
            },
            {
                title: "Cobertura jornalística molda opinião pública sobre a guerra",
                description: "Correspondentes de guerra como William Howard Russell influenciaram diretamente o debate político na Inglaterra.",
                source: "The Times",
                date: "1854-1856"
            }
        ],
        financialInfo: {
            financialImpact: "A guerra causou forte endividamento nas nações participantes, com altos gastos em logística, transporte e armamentos modernos. A infraestrutura militar moderna elevou os custos de forma inédita.",
            banks: [
                {
                    name: "Bank of England",
                    country: "England",
                    owners: [
                        {
                            name: "Lionel de Rothschild",
                            religion: "Jewish"
                        },
                        {
                            name: "Baron James de Rothschild",
                            religion: "Jewish"
                        }
                    ]
                },
                {
                    name: "Banque de France",
                    country: "France",
                    owners: [
                        {
                            name: "Achille Fould",
                            religion: "Jewish"
                        },
                        {
                            name: "Napoléon III",
                            religion: "Catholic"
                        }
                    ]
                },
                {
                    name: "Russian State Bank",
                    country: "Russia",
                    owners: [
                        {
                            name: "Alexander II",
                            religion: "Orthodox"
                        },
                        {
                            name: "Ministério das Finanças",
                            religion: "Orthodox"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Rothschild & Cie",
                    type: "organization",
                    side: "France",
                    amount: "Extensive",
                    currency: "French Franc"
                },
                {
                    name: "Barings Bank",
                    type: "organization",
                    side: "United Kingdom",
                    amount: "Significant",
                    currency: "British Pound"
                },
                {
                    name: "Bancos de Investimento do Cáucaso",
                    type: "organization",
                    side: "Russia",
                    amount: "Moderado",
                    currency: "Ruble"
                }
            ]
        }
    },
    {
        id: "american-civil-war",
        year: 1861,
        title: "Guerra Civil Americana",
        description: "Conflito entre os estados do Norte (União) e os estados separatistas do Sul (Confederação), motivado por questões econômicas, políticas e morais, incluindo a escravidão e os direitos dos estados.",
        mediaPortrayal: "A guerra é frequentemente retratada como uma luta pela abolição da escravidão, embora também envolvesse interesses econômicos, domínio federal e o papel das elites bancárias e industriais.",
        propaganda: {
            sides: [
                {
                    name: "União Americana",
                    slogans: [
                        "Preservar a União",
                        "Liberdade para todos"
                    ],
                    mediaOutlets: [
                        "Harper's Weekly",
                        "The New York Times"
                    ],
                    techniques: [
                        "Exaltação da Constituição",
                        "Demonização do separatismo"
                    ]
                },
                {
                    name: "Confederação Americana",
                    slogans: [
                        "Direitos dos Estados",
                        "Nossa terra, nossa escolha"
                    ],
                    mediaOutlets: [
                        "Richmond Enquirer",
                        "Charleston Mercury"
                    ],
                    techniques: [
                        "Romantização da causa sulista",
                        "Apelo à tradição e soberania"
                    ]
                }
            ],
            analysis: "Ambos os lados utilizaram fortemente a imprensa e panfletos para mobilizar apoio popular, moldando a percepção do conflito de acordo com interesses ideológicos e econômicos regionais."
        },
        theories: [
            {
                title: "A teoria da 'Causa Perdida'",
                description: "Narrativa pós-guerra que retrata o Sul como nobre defensor de seus direitos constitucionais, minimizando o papel da escravidão no conflito."
            },
            {
                title: "Provocação intencional de Lincoln",
                description: "Teóricos sugerem que Lincoln provocou o Sul a atacar primeiro em Fort Sumter para justificar a guerra perante o Norte indeciso."
            },
            {
                title: "Influência dos industriais do Norte",
                description: "Alguns historiadores defendem que interesses industriais e financeiros pressionaram pela guerra para consolidar o poder federal sobre a economia."
            },
            {
                title: "Financiamento internacional estratégico",
                description: "Bancos internacionais e grupos financeiros europeus financiaram ambos os lados visando garantir influência econômica na América pós-guerra."
            }
        ],
        relatedNews: [
            {
                title: "Ataque a Fort Sumter marca início da guerra",
                description: "O bombardeio de Fort Sumter pela Confederação provocou a reação militar da União e deu início ao conflito armado.",
                source: "Arquivos de Guerra dos EUA",
                date: "1861-04-12"
            },
            {
                title: "Emancipação como arma política",
                description: "A Proclamação da Emancipação de Lincoln em 1863 visou enfraquecer o Sul e conquistar apoio internacional à União.",
                source: "Documentos Presidenciais",
                date: "1863-01-01"
            },
            {
                title: "Bancos de Nova York financiam esforço de guerra",
                description: "Grandes instituições financeiras do Norte emprestaram bilhões em títulos ao governo da União.",
                source: "Registros do Tesouro Americano",
                date: "1862"
            },
            {
                title: "Rothschilds observam com cautela o conflito americano",
                description: "Correspondências da família Rothschild revelam análise estratégica sobre o possível impacto da guerra no comércio internacional.",
                source: "Arquivo Rothschild (Londres)",
                date: "1863"
            }
        ],
        financialInfo: {
            financialImpact: "A Guerra Civil causou grandes desequilíbrios econômicos, inflação no Sul, expansão do sistema bancário no Norte e aumento da dívida pública. Também fortaleceu os bancos do Norte como instituições dominantes na política americana.",
            banks: [
                {
                    name: "National City Bank of New York (futura Citibank)",
                    country: "USA",
                    owners: [
                        {
                            name: "Moses Taylor",
                            religion: "Presbiteriano"
                        },
                        {
                            name: "George Peabody",
                            religion: "Protestante"
                        }
                    ]
                },
                {
                    name: "Rothschild Bank",
                    country: "England",
                    owners: [
                        {
                            name: "Nathaniel de Rothschild",
                            religion: "Judeu"
                        },
                        {
                            name: "Lionel de Rothschild",
                            religion: "Judeu"
                        }
                    ]
                },
                {
                    name: "Baring Brothers & Co.",
                    country: "England",
                    owners: [
                        {
                            name: "Thomas Baring",
                            religion: "Anglicano"
                        }
                    ]
                },
                {
                    name: "Ernst & Co.",
                    country: "Confederate States",
                    owners: [
                        {
                            name: "Charles Prioleau",
                            religion: "Cristão"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Rothschild Family",
                    type: "organization",
                    side: "Ambos (neutro com interesse econômico)",
                    amount: "Desconhecido",
                    currency: "Libra Esterlina / Dólar"
                },
                {
                    name: "George Peabody & Co.",
                    type: "organization",
                    side: "União",
                    amount: "Milhões em títulos de guerra",
                    currency: "Dólar Americano"
                },
                {
                    name: "Ernst & Co. (Liverpool)",
                    type: "organization",
                    side: "Confederação",
                    amount: "Financiamento de navios e algodão",
                    currency: "Libra Esterlina"
                }
            ]
        },
        image: "https://cdn.britannica.com/13/149613-159-AAE1FE89/Battle-of-Gettysburg-Currier-lithograph-Ives-July-3-1863.jpg"
    },
    {
        id: "lincoln-assassination",
        year: 1865,
        title: "Assassinato de Abraham Lincoln",
        description: "O presidente Abraham Lincoln foi assassinado por John Wilkes Booth no Teatro Ford, durante um período crucial da reconstrução pós-Guerra Civil.",
        mediaPortrayal: "Os jornais da época retrataram o assassinato como um ato isolado de um ator sulista fanático, embora evidências posteriores sugiram uma conspiração mais ampla.",
        propaganda: {
            sides: [
                {
                    name: "Unionistas e Republicanos",
                    slogans: [
                        "Preservar a União",
                        "Reconstrução com justiça"
                    ],
                    mediaOutlets: [
                        "The New York Times",
                        "Harper's Weekly"
                    ],
                    techniques: [
                        "Heroificação de Lincoln",
                        "Demonização dos conspiradores"
                    ]
                },
                {
                    name: "Simpatizantes Confederados",
                    slogans: [
                        "Vingança pela derrota",
                        "Mártires do Sul"
                    ],
                    mediaOutlets: [
                        "Richmond Examiner"
                    ],
                    techniques: [
                        "Culto ao mártir",
                        "Narrativas de revanche"
                    ]
                }
            ],
            analysis: "A propaganda após o assassinato de Lincoln focou em reforçar sua imagem como mártir nacional, ao mesmo tempo em que ocultava possíveis ligações com interesses econômicos ou conspirações mais amplas."
        },
        theories: [
            {
                title: "Conspiração bancária internacional",
                description: "Teoria sugere envolvimento de banqueiros internacionais devido à oposição de Lincoln ao sistema bancário centralizado e sua emissão dos 'Greenbacks'."
            },
            {
                title: "Conluio com membros da Confederação",
                description: "Evidências apontam para uma conspiração maior envolvendo ex-funcionários e simpatizantes do governo confederado."
            },
            {
                title: "Nova política monetária ameaçava interesses",
                description: "Alguns historiadores argumentam que Lincoln estava prestes a implementar um novo sistema monetário baseado em crédito soberano, o que ameaçava grandes interesses bancários."
            }
        ],
        relatedNews: [
            {
                title: "Vice-presidente Johnson assume presidência após assassinato",
                description: "Andrew Johnson torna-se presidente, iniciando um período turbulento da Reconstrução.",
                source: "The National Intelligencer",
                date: "1865-04-15"
            },
            {
                title: "Conspiradores são capturados e executados",
                description: "Vários cúmplices de Booth foram julgados e executados, incluindo Mary Surratt, a primeira mulher executada pelo governo dos EUA.",
                source: "The Washington Chronicle",
                date: "1865-07-07"
            },
            {
                title: "Booth é morto em perseguição policial",
                description: "John Wilkes Booth foi encontrado e morto por tropas da União após doze dias de fuga.",
                source: "The Philadelphia Inquirer",
                date: "1865-04-26"
            }
        ],
        financialInfo: {
            financialImpact: "A morte de Lincoln e o subsequente abandono de suas ideias sobre moeda soberana abriram caminho para a restauração da influência de bancos privados no sistema monetário americano.",
            banks: [
                {
                    name: "Bank of the Republic",
                    country: "Estados Unidos",
                    owners: [
                        {
                            name: "Jay Cooke",
                            religion: "Protestant"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Northern Banking Interests",
                    type: "organization",
                    side: "Apoiadores de Johnson",
                    amount: "Desconhecido",
                    currency: "US Dollar"
                },
                {
                    name: "European Banking Houses",
                    type: "organization",
                    side: "Neutro / Interesse indireto",
                    amount: "Desconhecido",
                    currency: "Multiple"
                }
            ]
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Lincoln_assassination_slide_c1900_-_Restoration.jpg/1200px-Lincoln_assassination_slide_c1900_-_Restoration.jpg"
    },
    {
        id: "spanish-american-war",
        year: 1898,
        title: "Guerra Hispano-Americana",
        description: "Conflito entre os Estados Unidos e a Espanha que levou à independência de Cuba e à anexação dos territórios de Porto Rico, Guam e Filipinas pelos EUA, marcando o início do imperialismo americano global.",
        mediaPortrayal: "A guerra foi alimentada por uma intensa campanha da 'imprensa amarela' liderada por William Randolph Hearst e Joseph Pulitzer, que publicaram reportagens sensacionalistas sobre abusos espanhóis em Cuba para mobilizar a opinião pública americana.",
        propaganda: {
            sides: [
                {
                    name: "Estados Unidos",
                    slogans: [
                        "Lembrem-se do Maine!",
                        "Libertar Cuba!",
                        "Fardo do homem branco"
                    ],
                    mediaOutlets: [
                        "New York Journal",
                        "New York World"
                    ],
                    techniques: [
                        "Demonização do inimigo",
                        "Apelo emocional",
                        "Patriotismo exacerbado",
                        "Justificação moral"
                    ]
                },
                {
                    name: "Espanha",
                    slogans: [
                        "Unidade do Império",
                        "Defender a honra nacional",
                        "Cuba é espanhola"
                    ],
                    mediaOutlets: [
                        "La Época",
                        "ABC"
                    ],
                    techniques: [
                        "Apelo ao passado imperial",
                        "Exaltação patriótica",
                        "Distorção de fatos"
                    ]
                }
            ],
            analysis: "Nos EUA, a propaganda foi essencial para justificar a guerra como uma missão de libertação, enquanto ocultava os reais interesses imperialistas. Na Espanha, a propaganda focou na defesa da honra nacional e da integridade do império."
        },
        theories: [
            {
                title: "Explosão deliberada do USS Maine",
                description: "Sugere que os próprios Estados Unidos sabotaram o USS Maine no porto de Havana para criar um casus belli e mobilizar a opinião pública a favor da guerra.",
                evidence: "Relatórios investigativos contraditórios ao longo das décadas; ausência de provas conclusivas de ataque espanhol; manipulação da imprensa logo após o incidente."
            },
            {
                title: "Guerra como ferramenta imperialista",
                description: "Argumenta-se que a guerra foi deliberadamente provocada como parte de um plano expansionista dos EUA para garantir presença estratégica no Caribe e no Pacífico.",
                evidence: "Declarações de políticos da época, como Theodore Roosevelt e Alfred Mahan; rápido controle e anexação dos territórios após a guerra."
            },
            {
                title: "Poder da imprensa amarela",
                description: "Alguns estudiosos acreditam que a imprensa teve papel determinante na deflagração da guerra, moldando a política externa com base em sensacionalismo.",
                evidence: "Citações diretas como a atribuída a Hearst: 'Você fornece as fotos, eu fornecerei a guerra'; análises de circulação e conteúdo da época."
            }
        ],
        image: "https://cdn.britannica.com/36/181736-050-4FA9C071/Theodore-Roosevelt-Rough-Riders-Spanish-American-War-Kurz-1898.jpg",
        relatedNews: [
            {
                title: "USS Maine explode no porto de Havana",
                description: "O navio de guerra americano explode em circunstâncias misteriosas, matando 266 marinheiros e se tornando o estopim para a guerra.",
                source: "New York Journal",
                date: "1898-02-15"
            },
            {
                title: "Estados Unidos declaram guerra à Espanha",
                description: "O Congresso aprova a resolução de guerra após semanas de pressão popular e midiática, sob o pretexto de libertar Cuba.",
                source: "Library of Congress",
                date: "1898-04-25"
            },
            {
                title: "Tratado de Paris encerra a guerra",
                description: "O tratado formaliza a independência de Cuba e cede Filipinas, Porto Rico e Guam aos EUA por US$ 20 milhões.",
                source: "Diário Oficial Americano",
                date: "1898-12-10"
            },
            {
                title: "A resistência filipina contra o novo domínio americano",
                description: "Apesar da vitória sobre a Espanha, os EUA enfrentam resistência armada nas Filipinas, iniciando nova guerra não declarada.",
                source: "Archival News Reports",
                date: "1899-1902"
            }
        ],
        financialInfo: {
            financialImpact: "O custo da guerra foi relativamente baixo em comparação aos ganhos territoriais dos EUA. A venda das Filipinas e o acesso comercial aos novos territórios impulsionaram a economia americana.",
            banks: [
                {
                    name: "First National Bank of New York",
                    country: "United States",
                    owners: [
                        {
                            name: "J.P. Morgan",
                            religion: "Episcopalian"
                        },
                        {
                            name: "John D. Rockefeller",
                            religion: "Baptist"
                        }
                    ]
                },
                {
                    name: "Banco de España",
                    country: "Spain",
                    owners: [
                        {
                            name: "Carlos María de Castro",
                            religion: "Catholic"
                        },
                        {
                            name: "Família Real Espanhola",
                            religion: "Catholic"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "J.P. Morgan & Co.",
                    type: "organization",
                    side: "United States",
                    amount: "Significativo",
                    currency: "US Dollar"
                },
                {
                    name: "Morgan y Cía",
                    type: "organization",
                    side: "Spain",
                    amount: "Moderado",
                    currency: "Peseta"
                }
            ]
        }
    },
    {
        id: "titanic-conspiracy",
        year: 1912,
        title: "Naufrágio do Titanic e Morte de John Jacob Astor IV",
        description: "O naufrágio do Titanic resultou na morte de John Jacob Astor IV, um dos homens mais ricos do mundo e importante opositor à criação do Federal Reserve.",
        mediaPortrayal: "A mídia da época focou principalmente no aspecto trágico do naufrágio, mas pouca atenção foi dada às mortes específicas de figuras importantes que se opunham à criação do Federal Reserve americano.",
        propaganda: {
            sides: [
                {
                    name: "Apoiadores do Federal Reserve",
                    slogans: [
                        "Estabilidade econômica através do controle centralizado",
                        "Fim das crises bancárias"
                    ],
                    mediaOutlets: [
                        "New York Times"
                    ],
                    techniques: [
                        "Supressão de oposição",
                        "Narrativas de progresso econômico"
                    ]
                },
                {
                    name: "Opositores do Federal Reserve",
                    slogans: [
                        "Liberdade financeira individual",
                        "Contra o monopólio bancário"
                    ],
                    mediaOutlets: [
                        "The World",
                        "The Sun"
                    ],
                    techniques: [
                        "Apelo à soberania econômica",
                        "Críticas à concentração de poder financeiro"
                    ]
                }
            ],
            analysis: "Apesar de não haver propaganda oficial sobre o naufrágio em si, especula-se que a cobertura seletiva da mídia favoreceu os interesses dos apoiadores do Federal Reserve ao silenciar suspeitas e conexões com figuras influentes mortas no evento."
        },
        theories: [
            {
                title: "Eliminação de opositores do Federal Reserve",
                description: "Teoria sugere que o naufrágio foi orquestrado para eliminar importantes opositores do Federal Reserve, incluindo John Jacob Astor IV, Benjamin Guggenheim e Isidor Straus."
            },
            {
                title: "Troca pelo Olympic",
                description: "Alguns teóricos argumentam que o Titanic foi trocado por seu navio irmão Olympic em uma fraude de seguro elaborada."
            },
            {
                title: "Conluio de JP Morgan",
                description: "Documentos sugerem que JP Morgan, que cancelou sua viagem no último minuto, pode ter tido conhecimento prévio do desastre."
            }
        ],
        relatedNews: [
            {
                title: "JP Morgan cancela viagem no Titanic no último momento",
                description: "Decisão de última hora levantou suspeitas posteriores sobre o conhecimento prévio do desastre.",
                source: "The Evening Post",
                date: "1912-04-10"
            },
            {
                title: "Três importantes banqueiros opositores do Federal Reserve morrem no naufrágio",
                description: "As mortes de John Jacob Astor IV, Benjamin Guggenheim e Isidor Straus foram vistas por teóricos como altamente convenientes para os apoiadores do banco central.",
                source: "New York Herald",
                date: "1912-04-16"
            },
            {
                title: "Federal Reserve é estabelecido um ano após o naufrágio",
                description: "A criação do Federal Reserve ocorreu em 1913, menos de dois anos após a morte de seus principais opositores.",
                source: "Arquivos do Congresso Americano",
                date: "1913-12-23"
            }
        ],
        financialInfo: {
            financialImpact: "O naufrágio do Titanic teve efeitos financeiros significativos, incluindo perdas massivas para seguradoras e mudanças na regulação marítima e financeira. Também eliminou vozes poderosas contra a centralização do sistema bancário nos EUA.",
            banks: [
                {
                    name: "JP Morgan & Co.",
                    country: "Estados Unidos",
                    owners: [
                        {
                            name: "J.P. Morgan",
                            religion: "Episcopal"
                        }
                    ]
                },
                {
                    name: "Astor Trust Company",
                    country: "Estados Unidos",
                    owners: [
                        {
                            name: "John Jacob Astor IV",
                            religion: "Episcopal"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "White Star Line",
                    type: "corporation",
                    side: "Neutro",
                    amount: "Desconhecido",
                    currency: "British Pound"
                },
                {
                    name: "International Mercantile Marine Co.",
                    type: "corporation",
                    side: "Apoiadores do Federal Reserve",
                    amount: "Desconhecido",
                    currency: "US Dollar"
                },
                {
                    name: "Lloyd's of London",
                    type: "corporation",
                    side: "Neutro",
                    amount: "Altas indenizações",
                    currency: "British Pound"
                }
            ]
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/RMS_Titanic_3.jpg"
    },
    {
        id: "world-war-1",
        year: 1914,
        title: "Primeira Guerra Mundial",
        description: "Conflito global centrado na Europa entre 1914 e 1918, envolvendo as principais potências mundiais divididas entre os Aliados e as Potências Centrais. Marcou uma virada brutal na guerra moderna, com armas químicas, metralhadoras e trincheiras.",
        mediaPortrayal: "No início, os jornais glorificavam a guerra como dever patriótico e aventura heroica. À medida que o conflito se prolongava, surgiram imagens chocantes da vida nas trincheiras, amputados, e traumas psicológicos, afetando a percepção pública e criando ceticismo generalizado.",
        propaganda: {
            sides: [
                {
                    name: "Aliados (Reino Unido, França, Rússia, EUA)",
                    slogans: [
                        "Para a liberdade!",
                        "Derrotar os bárbaros!",
                        "A guerra que acaba com todas as guerras"
                    ],
                    mediaOutlets: [
                        "The Times",
                        "Le Petit Journal",
                        "The New York Times"
                    ],
                    techniques: [
                        "Demonização do inimigo",
                        "Apelos emocionais",
                        "Cartazes patrióticos",
                        "Censura",
                        "Fake news (como a história dos bebês belgas assassinados)"
                    ]
                },
                {
                    name: "Potências Centrais (Alemanha, Áustria-Hungria, Império Otomano)",
                    slogans: [
                        "Pelo Kaiser!",
                        "Honra e dever",
                        "Protejam o Império"
                    ],
                    mediaOutlets: [
                        "Berliner Tageblatt",
                        "Neue Freie Presse"
                    ],
                    techniques: [
                        "Censura total da imprensa",
                        "Exaltação do dever militar",
                        "Desumanização dos Aliados",
                        "Culto ao imperador e à disciplina militar"
                    ]
                }
            ],
            analysis: "A Primeira Guerra foi o auge da propaganda estatal moderna. Governos controlaram rigidamente a narrativa, criaram inimigos simbólicos e manipularam emoções patrióticas para manter o moral interno e recrutar soldados. A propaganda foi essencial para sustentar o esforço de guerra prolongado."
        },
        theories: [
            {
                title: "Teoria da culpa alemã (Artigo 231 do Tratado de Versalhes)",
                description: "Sustenta que a Alemanha foi única e exclusivamente responsável pelo início da guerra, tese controversa e rejeitada por muitos historiadores modernos.",
                evidence: "Tratado de Versalhes, especialmente o Artigo 231; telegramas diplomáticos anteriores ao atentado em Sarajevo; corrida armamentista generalizada e alianças secretas."
            },
            {
                title: "Banqueiros internacionais lucraram com a guerra",
                description: "Teorias revisionistas afirmam que a guerra foi prolongada por interesses bancários que financiavam ambos os lados e lucravam com empréstimos e reconstrução. Teorias conspiratórias afirmavam que banqueiros judeus lucravam com a guerra, fomentando o conflito para vender armas e controlar economias. Famílias como os Rothschild eram frequentemente citadas, sem provas reais.",
                evidence: "Registros de empréstimos da JP Morgan à Tríplice Entente; conexões entre bancos britânicos, franceses e americanos com fabricantes de armas; aumento abrupto dos lucros de indústrias bélicas entre 1915 e 1918."
            },
            {
                title: "Guerra inevitável causada por alianças e imperialismo",
                description: "Sustenta que a guerra foi resultado da rivalidade imperialista, da corrida armamentista e de alianças rígidas que forçaram uma escalada irreversível após o assassinato de Francisco Ferdinando.",
                evidence: "Cartas diplomáticas de 1913-1914; debates parlamentares nos principais países europeus; análises de historiadores como Christopher Clark e Niall Ferguson."
            },
            {
                title: "A Alemanha foi apunhalada pelas costas",
                description: "Na Alemanha, após a derrota, surgiu a narrativa da punhalada pelas costas', em que grupos nacionalistas acusavam comunistas, socialistas e judeus de terem sabotado o esforço de guerra — uma teoria que alimentou o antissemitismo nos anos seguintes e foi explorada pelos nazistas.",
                evidence: "Karl Helfferich, político alemão, acusou abertamente judeus e socialistas de desestabilizar a pátria."
            },
            {
                title: "Judeus Suspeitos pelos czaristas do Império Russo",
                description: "No Império Russo, judeus eram vistos com suspeita por alguns setores da elite czarista, sendo ligados a movimentos revolucionários. Pogroms (massacres antijudaicos) ocorreram antes, durante e depois da guerra.",
                evidence: ""
            }
        ],
        image: "https://cdn.britannica.com/12/204912-050-BC570693/German-infantrymen-circa-1914-World-War-I.jpg",
        relatedNews: [
            {
                title: "Assassinato do Arquiduque Francisco Ferdinando",
                description: "O herdeiro do trono austro-húngaro foi morto por nacionalistas sérvios em Sarajevo, evento que desencadeou o conflito.",
                source: "Neue Freie Presse",
                date: "1914-06-28"
            },
            {
                title: "Alemanha invade a Bélgica, Reino Unido entra na guerra",
                description: "A violação da neutralidade belga leva o Reino Unido a declarar guerra à Alemanha.",
                source: "The Times",
                date: "1914-08-04"
            },
            {
                title: "Batalha do Somme revela brutalidade do front ocidental",
                description: "Uma das batalhas mais sangrentas da guerra, com mais de 1 milhão de mortos e feridos.",
                source: "Le Monde (arquivo)",
                date: "1916-11-18"
            },
            {
                title: "Tratado de Versalhes é assinado",
                description: "Acordo de paz impõe duras punições à Alemanha, incluindo reparações, perdas territoriais e aceitação da culpa pela guerra.",
                source: "New York Times",
                date: "1919-06-28"
            },
            {
                title: "Participação dos Judeus na guerra",
                description: "Alemanha: Cerca de 100.000 judeus alemães serviram no exército imperial. Muitos eram patriotas e acreditavam que sua participação mostraria lealdade ao Estado alemão.Áustria-Hungria: Estima-se que mais de 300.000 judeus tenham servido nas forças austro-húngaras.Rússia: Quase 500.000 judeus lutaram no exército czarista, mesmo com o forte antissemitismo institucional no império.França, Reino Unido e EUA: Muitos judeus também serviram como soldados ou apoiadores logísticos nos Aliados.",
                source: "ChatGPT",
                date: "2025-04-25"
            }
        ],
        financialInfo: {
            financialImpact: "A guerra devastou as finanças europeias, levando à hiperinflação na Alemanha e ao endividamento massivo do Reino Unido e França com os Estados Unidos. Criou as bases para a crise econômica dos anos 1920 e 1930.",
            banks: [
                {
                    name: "J.P. Morgan & Co.",
                    country: "United States",
                    owners: [
                        {
                            name: "J.P. Morgan Jr.",
                            religion: "Episcopalian"
                        }
                    ]
                },
                {
                    name: "Bank of England",
                    country: "United Kingdom",
                    owners: [
                        {
                            name: "Família Rothschild",
                            religion: "Jewish"
                        },
                        {
                            name: "Montagu Norman",
                            religion: "Anglican"
                        }
                    ]
                },
                {
                    name: "Deutsche Bank",
                    country: "Germany",
                    owners: [
                        {
                            name: "Albert Ballin",
                            religion: "Jewish (convertido ao protestantismo)"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "J.P. Morgan & Co.",
                    type: "organization",
                    side: "Aliados",
                    amount: "Mais de 3 bilhões de dólares",
                    currency: "US Dollar"
                },
                {
                    name: "Banco Nacional Alemão",
                    type: "organization",
                    side: "Potências Centrais",
                    amount: "Quantia desconhecida",
                    currency: "Mark Alemão"
                }
            ]
        }
    },
    {
        id: "jewish-involvement-ww1",
        year: 1914,
        title: "Participação Judaica na Primeira Guerra Mundial",
        description: "Judeus participaram ativamente da Primeira Guerra Mundial em todos os lados do conflito, enquanto também foram alvos de teorias conspiratórias que os associavam à alta finança e à manipulação da guerra.",
        mediaPortrayal: "A mídia da época variava entre reconhecer o esforço patriótico de soldados judeus e propagar teorias antissemitas, especialmente após a guerra, associando judeus à derrota alemã e a interesses financeiros internacionais.",
        propaganda: {
            sides: [
                {
                    name: "Império Alemão",
                    slogans: [
                        "Unidade nacional",
                        "Contra o inimigo interno"
                    ],
                    mediaOutlets: [
                        "Deutsche Zeitung",
                        "Berliner Tageblatt"
                    ],
                    techniques: [
                        "Demonização de minorias",
                        "Nacionalismo extremo"
                    ]
                },
                {
                    name: "Império Russo",
                    slogans: [
                        "Ordem cristã",
                        "Contra o bolchevismo"
                    ],
                    mediaOutlets: [
                        "Novoye Vremya"
                    ],
                    techniques: [
                        "Medo do comunismo",
                        "Antissemitismo tradicional"
                    ]
                }
            ],
            analysis: "A propaganda frequentemente utilizava o antissemitismo como ferramenta de coesão nacional e para justificar derrotas ou dificuldades internas, vinculando judeus a teorias de conspiração financeiras ou revolucionárias."
        },
        theories: [
            {
                title: "Banqueiros judeus lucraram com a guerra",
                description: "Teorias conspiratórias afirmavam que famílias como os Rothschild incentivaram o conflito para lucrar com empréstimos de guerra.",
                evidence: "Sem evidência concreta, amplamente desmentido por historiadores."
            },
            {
                title: "A 'punhalada pelas costas' na Alemanha",
                description: "Narrativa nacionalista que culpava socialistas, judeus e comunistas pela derrota alemã em 1918.",
                evidence: "Propagada por militares e nacionalistas alemães após o armistício."
            }
        ],
        image: "https://i.redd.it/5x7343makg7d1.jpeg",
        relatedNews: [
            {
                title: "Cerca de 100.000 judeus servem no exército alemão",
                description: "Altos níveis de participação e lealdade entre cidadãos judeus do Império Alemão.",
                source: "Frankfurter Zeitung",
                date: "1916-08-10"
            },
            {
                title: "Soldados judeus russos servem sob discriminação",
                description: "Mesmo enfrentando pogroms e restrições, centenas de milhares de judeus servem no exército russo.",
                source: "Moscow Gazette",
                date: "1915-03-04"
            }
        ],
        financialInfo: {
            financialImpact: "Acusações infundadas sugeriam que banqueiros judeus financiavam ambos os lados da guerra.",
            banks: [
                {
                    name: "Warburg Bank",
                    country: "Alemanha",
                    owners: [
                        {
                            name: "Max Warburg",
                            religion: "Judaísmo"
                        }
                    ]
                },
                {
                    name: "Kuhn, Loeb & Co.",
                    country: "EUA",
                    owners: [
                        {
                            name: "Jacob Schiff",
                            religion: "Judaísmo"
                        }
                    ]
                },
                {
                    name: "Banque Rothschild",
                    country: "França",
                    owners: [
                        {
                            name: "Édouard de Rothschild",
                            religion: "Judaísmo"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Jacob Schiff",
                    type: "individual",
                    side: "Aliados (via apoio anti-czarista)",
                    amount: "Estimado em milhões",
                    currency: "USD"
                }
            ]
        },
        casualties: {
            military: "Estimado entre 1,5 a 2 milhões de soldados judeus mobilizados",
            civilian: "Desconhecido",
            total: "Desconhecido"
        },
        keyFigures: [
            {
                name: "Max Warburg",
                role: "Banqueiro e conselheiro financeiro do Império Alemão",
                side: "Alemanha",
                fate: "Continuou atuando no sistema bancário até a ascensão do nazismo"
            },
            {
                name: "Jacob Schiff",
                role: "Banqueiro americano, crítico do czarismo",
                side: "Aliados (oposição ao Império Russo)",
                fate: "Morreu em 1920, reconhecido por seu apoio a causas judaicas"
            }
        ]
    },
    {
        id: "russian-civil-war",
        year: 1917,
        title: "Guerra Civil Russa",
        description: "Conflito multi-faccional após a Revolução Russa entre o Exército Vermelho bolchevique e as forças anti-comunistas (Exército Branco).",
        mediaPortrayal: "A representação ocidental contemporânea era fortemente anti-bolchevique, enquanto a história soviética posterior glorificava os revolucionários.",
        propaganda: {
            sides: [
                {
                    name: "Exército Vermelho",
                    slogans: [
                        "Libertar a Europa",
                        "Libertar a América do Norte"
                    ],
                    mediaOutlets: [
                        "The Times"
                    ],
                    techniques: [
                        "Culto à personalidade",
                        "Exaltação nacionalista"
                    ]
                },
                {
                    name: "Exército Branco",
                    slogans: [
                        "Libertar a Europa",
                        "Libertar a América do Norte"
                    ],
                    mediaOutlets: [
                        "The Times"
                    ],
                    techniques: [
                        "Culto à personalidade",
                        "Exaltação nacionalista"
                    ]
                }
            ],
            analysis: "A propaganda da Guerra Civil Russa foi uma tentativa de persuadir a população para apoiar o Exército Vermelho, enquanto os opositores utilizaram narrativas similares com objetivos contrários."
        },
        theories: [
            {
                title: "A teoria da 'conspiração judaico-bolchevique'",
                description: "Teoria promovida por opositores dos soviéticos alegando que a revolução era parte de um complô judeu internacional, usada como instrumento de propaganda anticomunista e antissemita."
            },
            {
                title: "Efeitos da intervenção ocidental",
                description: "Historiadores debatem se a intervenção de países ocidentais prolongou o conflito ou fortaleceu o apoio ao regime bolchevique ao gerar um senso de ameaça externa unificadora."
            }
        ],
        relatedNews: [],
        financialInfo: {
            financialImpact: "O conflito desestabilizou completamente o sistema financeiro imperial russo, com nacionalizações forçadas e o surgimento de uma economia centralmente planejada. Houve apoio indireto estrangeiro a ambos os lados, com impacto geopolítico duradouro.",
            banks: [
                {
                    name: "Bank of England",
                    country: "United Kingdom",
                    owners: [
                        {
                            name: "Governo Britânico",
                            religion: "Anglicano"
                        }
                    ]
                },
                {
                    name: "Banque de France",
                    country: "France",
                    owners: [
                        {
                            name: "Governo Francês",
                            religion: "Católico"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Governo Britânico",
                    type: "organization",
                    side: "Exército Branco",
                    amount: "Desconhecido",
                    currency: "Libra Esterlina"
                },
                {
                    name: "Governo Francês",
                    type: "government",
                    side: "Exército Branco",
                    amount: "Desconhecido",
                    currency: "Franco Francês"
                },
                {
                    name: "Komintern",
                    type: "organization",
                    side: "Exército Vermelho",
                    amount: "Recursos logísticos e ideológicos",
                    currency: "Rublo soviético"
                },
                {
                    name: "Empresários russos exilados",
                    type: "organization",
                    side: "Exército Branco",
                    amount: "Diversos fundos",
                    currency: "Ouro e moedas estrangeiras"
                }
            ]
        },
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/CWRArticleImage.jpg"
    },
    {
        id: "world-war-2",
        year: 1939,
        title: "Segunda Guerra Mundial",
        description: "Conflito global que envolveu a maioria das nações do mundo, incluindo todas as grandes potências.",
        mediaPortrayal: "Frequentemente descrita como a 'guerra boa' contra o mal absoluto, a narrativa dominante simplifica as complexidades morais e as alianças pragmáticas do conflito.",
        propaganda: {
            sides: [
                {
                    name: "Aliados",
                    slogans: [
                        "Unidos pela liberdade",
                        "Derrotar o Eixo"
                    ],
                    mediaOutlets: [
                        "BBC",
                        "The New York Times"
                    ],
                    techniques: [
                        "Desumanização do inimigo",
                        "Apelo ao patriotismo"
                    ]
                },
                {
                    name: "Eixo",
                    slogans: [
                        "Nova Ordem Mundial",
                        "Europa para os europeus"
                    ],
                    mediaOutlets: [
                        "Der Stürmer",
                        "Il Popolo d’Italia"
                    ],
                    techniques: [
                        "Culto ao líder",
                        "Propaganda racial"
                    ]
                }
            ],
            analysis: `A propaganda foi essencial para a mobilização civil e militar em ambos os lados, com intensa manipulação emocional e racial. Os judeus eram acusados de coisas como roubar ao povo alemão o seu trabalho árduo e de, em simultâneo, evitar o trabalho físico. Hitler declarou que a missão do movimento nazi era aniquilar o 'bolchevismo judeu', que também era chamado de 'bolchevismo cultural'.[7] Hitler afirmou que os 'três vícios' do 'marxismo judaico' eram a democracia, o pacifismo e o internacionalismo,[8] e que os judeus eram responsáveis pelo bolchevismo, comunismo e marxismo.[9] Joseph Goebbels em 1937 A Grande Exposição Anti-Bolchevista declarou que o bolchevismo e os judeus eram uma e a mesma coisa.[10] Source:"https://pt.wikipedia.org/wiki/Propaganda_nazista"`
        },
        theories: [
            {
                title: "Os judeus como financistas das Guerras e Responsáveis pela sofrimento da Alemanha",
                description: "Teorias sugerem que os judeus eram financiadores das Guerras e responsáveis pelo sofrimento da Alemanha.",
                evidence: "Os financiadores da Guerra"
            },
            {
                title: "Pearl Harbor como pretexto",
                description: "Teorias sugerem que Roosevelt sabia do ataque a Pearl Harbor antecipadamente e permitiu que ocorresse para justificar a entrada dos EUA na guerra.",
                evidence: "Mensagens interceptadas antes do ataque"
            },
            {
                title: "Bomba atômica como demonstração de poder",
                description: "Historiadores argumentam que o bombardeio do Japão visava impressionar a União Soviética mais do que encerrar a guerra.",
                evidence: "Memorandos do Projeto Manhattan"
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Bundesarchiv_Bild_102-10541%2C_Weimar%2C_Aufmarsch_der_Nationalsozialisten.jpg",
        relatedNews: [
            {
                title: "Holocausto e libertação dos campos",
                description: "Divulgação global das atrocidades cometidas pelos nazistas após a libertação dos campos de concentração.",
                source: "The Times",
                evidence: "Apenas mostraram fotos dos corpos de pessoas doentes e mortos e pintaram como se fosse um massacre, enquanto os ricos judeus no poder financiando a inglaterra deixava seu povo cheio de doenças na polonia. Zyklon B era comercializado como um inseticida para matar pulgas, as mesmas causadoras da tifo, que praticamente todos os judeus nos campos de concentração possuiam, e todos os experimentos médicos eram feitos para salvar esse povo dessa doença e dessa praga, todos passavam por banho de Zyklon B, e mentiram sobre usar gás para exterminar os judeus, para que marcar o gado se vou extermina-lo como se nunca houvesse existido? e gado ainda tem utilidade então faz sentido marcar, agora pessoas que 'não teriam utilidade?' pelo contrário, Hitler queria curar todos os doentes, mas claro que não por que ele era bonzinho(NINGUÉM é bonzinho na guerra), mas por que queria e precisava de mão de obra, essa é a verdade! Inglaterra só entrou na guerra por ser influenciada por judeus que corriam o risco de perderem seu posto como os donos do mundo, só olhar os eventos passados, foi comprovado que desde antes de 1700 os judeus financiavam sempre os dois lados da guerra e influenciavam diretamente os governos, a revolução americana foi financiada pelos judeus, justamente para instaurar um governo sobre o capital, onde os judeus poderiam controlar qualquer governante pelo dinheiro através da falsa democracia. ",
                date: "1945-05-08"
            },
            {
                title: "Criação da ONU",
                description: "A fundação das Nações Unidas em 1945 marca o esforço de reconstrução e prevenção de novos conflitos.",
                source: "BBC News",
                date: "1945-10-24"
            }
        ],
        financialInfo: {
            financialImpact: "A guerra reestruturou totalmente o sistema financeiro global, estabelecendo os EUA como centro econômico e o dólar como moeda dominante.Os principais bancos centrais, como o Federal Reserve dos EUA, o Banco da Inglaterra, e o Bundesbank da Alemanha, controlam o BIS. Além disso, é notório que instituições privadas, como Rothschild e outras famílias de banqueiros, tiveram grande influência nas primeiras décadas, já que muitos desses bancos centrais mantinham laços estreitos com o BIS.Warburg e Rothschild: As famílias Warburg e Rothschild estavam frequentemente conectadas por laços comerciais e familiares, com os Rothschilds atuando como uma das principais famílias financeiras que influenciavam o sistema bancário europeu e, por conseguinte, o BIS e outros bancos centrais.Rothschild: A família Rothschild, uma das mais poderosas dinastias bancárias, tem sido associada a grande parte do sistema financeiro global, com membros da família desempenhando papéis significativos nos Rothschild Bank e outros bancos centrais, incluindo influências no Federal Reserve e no BIS. O controle de seus vários bancos ao longo do tempo lhes conferiu um enorme poder financeiro. ChatGPT: As famílias Warburg e Rothschild estavam frequentemente conectadas por laços comerciais e familiares, com os Rothschilds atuando como uma das principais famílias financeiras que influenciavam o sistema bancário europeu e, por conseguinte, o BIS e outros bancos centrais.",
            banks: [
                {
                    name: "Bank of England",
                    country: "Reino Unido",
                    owners: [
                        {
                            name: "Nathan Rothschild",
                            religion: "Judaísmo"
                        }
                    ]
                },
                {
                    name: "Deutsche Bank",
                    country: "Alemanha",
                    owners: [
                        {
                            name: "Albert Vögler",
                            religion: "Cristianismo Protestante"
                        }
                    ]
                },
                {
                    name: "J.P. Morgan & Co.",
                    country: "Estados Unidos",
                    owners: [
                        {
                            name: "J.P. Morgan Jr.",
                            religion: "Episcopal"
                        }
                    ]
                },
                {
                    name: "Banque de France",
                    country: "França",
                    owners: [
                        {
                            name: "Família Rothschild",
                            religion: "Judaísmo"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Federal Reserve - Marriner S. Eccles",
                    type: "government",
                    side: "Aliados",
                    amount: "Bilhões em empréstimos e suporte logístico",
                    currency: "USD"
                },
                {
                    name: "Bank for International Settlements",
                    type: "government",
                    side: "Ambos (criticado por colaborar com o Reich)",
                    amount: "Desconhecido",
                    currency: "Francos Suíços"
                },
                {
                    name: "Warburg Bank",
                    type: "individual",
                    side: "Eixo (antes de 1941) / depois neutro",
                    amount: "Não divulgado",
                    currency: "Marcos e Francos"
                }
            ]
        },
        casualties: {
            military: "25 milhões",
            civilian: "50 milhões",
            total: "75 milhões"
        },
        keyFigures: [
            {
                name: "Winston Churchill",
                role: "Primeiro-ministro do Reino Unido",
                side: "Aliados",
                fate: "Sobreviveu à guerra, ganhou o Prêmio Nobel de Literatura"
            },
            {
                name: "Adolf Hitler",
                role: "Führer da Alemanha",
                side: "Eixo",
                fate: "'Suicidou-se' em 1945"
            },
            {
                name: "Franklin D. Roosevelt",
                role: "Presidente dos EUA",
                side: "Aliados",
                fate: "Morreu no cargo em 1945"
            },
            {
                name: "Joseph Stalin",
                role: "Líder da URSS",
                side: "Aliados",
                fate: "Permaneceu no poder até 1953"
            }
        ],
        medicalReports: [
            {
                name: "Bergen-Belsen (libertado pelos britânicos em abril de 1945)",
                description: "mais da metade dos sobreviventes estavam infectados com tifo epidêmico ou febre tifoide.",
                source: "ChatGPT",
                evidence: "depois admitiu que era mentira."
            },
            {
                name: "Herman Rosenblat",
                description: "que inventou detalhes fictícios de amor e sobrevivência em um campo de concentração.",
                source: "ChatGPT",
                evidence: "ele foi desmascarado anos depois."
            },
            {
                name: "Binjamin Wilkomirski",
                description: 'Ele publicou um livro chamado "Fragments" nos anos 1990, alegando ser um sobrevivente infantil de campos de concentração. Depois foi revelado que ele era na verdade um suíço chamado Bruno Dössekker que nunca esteve em um campo.',
                source: "ChatGPT",
                evidence: "O livro foi desmascarado por historiadores."
            },
            {
                name: "Joseph Hirt",
                description: "Um americano que durante anos deu palestras dizendo ter fugido de Auschwitz e ter visto Mengele.",
                source: "ChatGPT",
                evidence: 'Em 2016 ele foi exposto: nunca esteve em Auschwitz. Ele admitiu publicamente que inventou a história "para criar empatia"'
            },
            {
                name: "Enric Marco",
                description: "Um espanhol que fingiu ter sido prisioneiro em campos de concentração nazistas.",
                source: "ChatGPT",
                evidence: "Descobriram que ele nunca foi preso pelos nazistas."
            }
        ]
    },
    {
        id: "korean-war",
        year: 1950,
        title: "Guerra da Coreia",
        description: "Conflito militar entre a Coreia do Norte (apoiada pela China e URSS) e a Coreia do Sul (apoiada pelos EUA e aliados da ONU), que resultou em milhões de mortes e uma divisão permanente da península coreana.",
        mediaPortrayal: "No Ocidente, foi retratada como uma luta heroica contra o comunismo; já na propaganda comunista, era descrita como resistência contra o imperialismo americano.",
        propaganda: {
            sides: [
                {
                    name: "Coreia do Norte e aliados",
                    slogans: [
                        "Unidade da Península",
                        "Derrotar os imperialistas"
                    ],
                    mediaOutlets: [
                        "Rodong Sinmun",
                        "Agência Xinhua"
                    ],
                    techniques: [
                        "Culto à personalidade",
                        "Apelo à autodeterminação",
                        "Anti-imperialismo"
                    ]
                },
                {
                    name: "Coreia do Sul e aliados ocidentais",
                    slogans: [
                        "Defesa da liberdade",
                        "Pare o comunismo"
                    ],
                    mediaOutlets: [
                        "Voice of America",
                        "BBC"
                    ],
                    techniques: [
                        "Apelo à democracia",
                        "Medo do comunismo",
                        "Demonização do inimigo"
                    ]
                }
            ],
            analysis: "A propaganda de ambos os lados foi usada para justificar intervenções externas e consolidar o apoio interno, muitas vezes escondendo os verdadeiros interesses geopolíticos envolvidos."
        },
        theories: [
            {
                title: "A guerra como proxy da Guerra Fria",
                description: "Teóricos argumentam que a Coreia foi usada como palco para um conflito indireto entre os EUA e a URSS.",
                evidence: "Documentos desclassificados do Departamento de Estado e arquivos soviéticos"
            },
            {
                title: "Teoria de instigação soviética",
                description: "Alguns acreditam que Stalin encorajou Kim Il-sung a invadir o sul para testar a reação americana.",
                evidence: "Telegramas entre Stalin, Mao e Kim Il-sung"
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/KoreanWarRefugeeWithBaby_%28cropped%29.jpg/1280px-KoreanWarRefugeeWithBaby_%28cropped%29.jpg",
        relatedNews: [
            {
                title: "Intervenção da ONU na Coreia",
                description: "O Conselho de Segurança autoriza ação militar liderada pelos EUA.",
                source: "New York Times",
                date: "1950-06-27"
            },
            {
                title: "Armistício assinado em Panmunjom",
                description: "Conflito termina com cessar-fogo, mas sem tratado de paz definitivo.",
                source: "BBC",
                date: "1953-07-27"
            }
        ],
        financialInfo: {
            financialImpact: "A guerra drenou bilhões de dólares das potências envolvidas e destruiu a economia coreana.",
            banks: [
                {
                    name: "Bank of Korea",
                    country: "Coreia do Sul",
                    owners: [
                        {
                            name: "Estado Sul-Coreano",
                            religion: "Cristianismo majoritário"
                        }
                    ]
                },
                {
                    name: "Banco do Povo da China",
                    country: "China",
                    owners: [
                        {
                            name: "Partido Comunista Chinês",
                            religion: "Ateísmo de Estado"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Federal Reserve - Thomas B. McCabe",
                    type: "government",
                    side: "Coreia do Sul e EUA",
                    amount: "Bilhões de dólares",
                    currency: "USD"
                },
                {
                    name: "União Soviética",
                    type: "government",
                    side: "Coreia do Norte",
                    amount: "Desconhecido",
                    currency: "Rublo soviético"
                }
            ]
        },
        casualties: {
            military: "1.2 milhão",
            civilian: "2 milhões",
            total: "3.2 milhões"
        },
        keyFigures: [
            {
                name: "Kim Il-sung",
                role: "Líder da Coreia do Norte",
                side: "Coreia do Norte",
                fate: "Permaneceu no poder até sua morte em 1994"
            },
            {
                name: "Syngman Rhee",
                role: "Presidente da Coreia do Sul",
                side: "Coreia do Sul",
                fate: "Foi exilado após protestos em 1960"
            },
            {
                name: "Douglas MacArthur",
                role: "Comandante das forças da ONU",
                side: "EUA",
                fate: "Demitido por Truman em 1951 após discordâncias sobre o uso de armas nucleares"
            }
        ]
    },
    {
        id: "vietnam-war",
        year: 1955,
        title: "Guerra do Vietnã",
        description: "Conflito prolongado no Vietnã, Laos e Camboja entre forças comunistas e anticomunistas.",
        mediaPortrayal: "A primeira 'guerra televisada', com imagens gráficas chegando às casas americanas, mudando a opinião pública contra o conflito.",
        propaganda: {
            sides: [
                {
                    name: "Estados Unidos",
                    slogans: [
                        "Liberdade para o Vietnã",
                        "Contra o comunismo"
                    ],
                    mediaOutlets: [
                        "The New York Times",
                        "CNN"
                    ],
                    techniques: [
                        "Apelo ao patriotismo",
                        "Demonização do Vietcong"
                    ]
                },
                {
                    name: "Vietcong",
                    slogans: [
                        "Libertação nacional",
                        "Contra a agressão imperialista"
                    ],
                    mediaOutlets: [
                        "Rádio Hanoi"
                    ],
                    techniques: [
                        "Apelo à independência",
                        "Medo da dominação estrangeira"
                    ]
                }
            ],
            analysis: "A propaganda americana focou no combate ao comunismo, enquanto o Vietcong enfatizou a luta pela independência nacional."
        },
        theories: [
            {
                title: "Incidente do Golfo de Tonkin",
                description: "O incidente do Golfo de Tonkin, usado para justificar o envolvimento direto dos EUA, é considerado por muitos historiadores como fabricado ou exagerado.",
                evidence: "Documentos desclassificados do governo dos EUA"
            },
            {
                title: "Complexo Industrial-Militar",
                description: "Alguns argumentam que a guerra foi prolongada deliberadamente para beneficiar o complexo industrial-militar.",
                evidence: "Relatórios de gastos militares durante a guerra"
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/VietnamMural.jpg",
        relatedNews: [
            {
                title: "Massacre de My Lai choca o mundo",
                description: "O massacre de civis vietnamitas por tropas americanas em My Lai expôs a brutalidade da guerra.",
                source: "The New York Times",
                date: "1969-11-12"
            },
            {
                title: "Protestos contra a guerra nos EUA",
                description: "Grandes protestos contra a guerra ocorreram em várias cidades americanas, culminando no massacre de Kent State.",
                source: "The Washington Post",
                date: "1970-05-04"
            }
        ],
        financialInfo: {
            financialImpact: "A guerra teve um impacto financeiro significativo nos EUA, contribuindo para a crise econômica dos anos 1970.",
            banks: [
                {
                    name: "Bank of America",
                    country: "Estados Unidos",
                    owners: [
                        {
                            name: "A.P. Giannini",
                            religion: "Católico"
                        }
                    ]
                },
                {
                    name: "Chase Manhattan Bank",
                    country: "Estados Unidos",
                    owners: [
                        {
                            name: "David Rockefeller",
                            religion: "Protestante"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Complexo Industrial-Militar",
                    type: "corporation",
                    side: "Estados Unidos",
                    amount: "Bilhões de dólares",
                    currency: "USD"
                },
                {
                    name: "Banco da China",
                    type: "government",
                    side: "Vietnã do Norte",
                    amount: "Desconhecido",
                    currency: "Yuan"
                }
            ]
        },
        casualties: {
            military: "1.1 milhão",
            civilian: "2 milhões",
            total: "3.1 milhões"
        },
        keyFigures: [
            {
                name: "Ho Chi Minh",
                role: "Líder do Vietnã do Norte",
                side: "Vietnã do Norte",
                fate: "Morreu em 1969"
            },
            {
                name: "Robert McNamara",
                role: "Secretário de Defesa dos EUA",
                side: "Estados Unidos",
                fate: "Renunciou em 1968"
            }
        ]
    },
    {
        id: "kennedy-assassination-1963",
        year: 1963,
        title: "Assassination of John F. Kennedy",
        description: "John F. Kennedy, the 35th President of the United States, was assassinated on November 22, 1963, in Dallas, Texas, by Lee Harvey Oswald. The event shocked the world and had a profound impact on U.S. politics.",
        mediaPortrayal: "The assassination was widely covered by media outlets worldwide, with many theories emerging about potential conspiracies. The most famous images are of the assassination itself and the funeral procession.",
        propaganda: {
            sides: [
                {
                    name: "U.S. Government",
                    slogans: [
                        "Justice for Kennedy",
                        "Protecting the American Dream"
                    ],
                    mediaOutlets: [
                        "TV",
                        "Newspapers"
                    ],
                    techniques: [
                        "National mourning",
                        "Unity and hope post-assassination"
                    ]
                },
                {
                    name: "Conspiracy Theorists",
                    slogans: [
                        "Truth about Kennedy's Assassination",
                        "Who Really Killed Kennedy?"
                    ],
                    mediaOutlets: [
                        "Books",
                        "Documentaries",
                        "Alternative News"
                    ],
                    techniques: [
                        "Alternative narratives",
                        "Questioning the official report"
                    ]
                }
            ],
            analysis: "Media coverage initially united the nation in mourning, but over time, theories about a possible conspiracy became more prevalent, shifting public opinion and creating divisions in how the assassination was perceived."
        },
        theories: [
            {
                title: "Lone Gunman vs. Conspiracy",
                description: "The official report concluded that Lee Harvey Oswald acted alone. However, many theories suggest that others, including the CIA, mafia, or foreign governments, were involved.",
                evidence: "Government investigation (Warren Commission) vs. numerous public figures questioning the findings."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/JFK_Motorcade_GettyImages-517330536.jpg/1280px-JFK_Motorcade_GettyImages-517330536.jpg",
        relatedNews: [
            {
                title: "Kennedy's Funeral",
                description: "The state funeral of John F. Kennedy took place on November 25, 1963, and was attended by dignitaries from all over the world.",
                source: "News footage",
                date: "1963-11-25"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "J.P. Morgan & Co.",
                    country: "United States",
                    assets: "Large amounts of assets",
                    amount: "None directly impacted",
                    currency: "USD",
                    owners: [
                        {
                            name: "J.P. Morgan",
                            religion: "Christian",
                            politicalAffiliation: "Pro-Democratic Party"
                        }
                    ],
                    side: "Neutral"
                }
            ],
            financiers: [
                {
                    name: "U.S. Government",
                    type: "government",
                    amount: "Expenses related to investigations and security",
                    side: "U.S. Government"
                }
            ],
            financialImpact: "The assassination led to increased security measures for political figures and long-term economic considerations regarding national security."
        },
        casualties: {
            military: "None",
            civilian: "One (Kennedy)",
            total: "One"
        },
        keyFigures: [
            {
                name: "John F. Kennedy",
                role: "President of the United States",
                side: "U.S. Government",
                fate: "Assassinated"
            },
            {
                name: "Lee Harvey Oswald",
                role: "Assassin",
                side: "Alleged lone gunman",
                fate: "Killed two days later by Jack Ruby"
            }
        ],
        winners: [
            {
                name: "N/A",
                country: "U.S.",
                side: "N/A",
                date: "N/A"
            }
        ]
    },
    {
        id: "afghan-soviet-war",
        year: 1979,
        title: "Guerra Soviético-Afegã",
        description: "Conflito de nove anos entre forças soviéticas e insurgentes mujahideen no Afeganistão.",
        mediaPortrayal: "Os mujahideen foram retratados na mídia ocidental como 'lutadores pela liberdade', mas esta narrativa mudou drasticamente após o surgimento da Al-Qaeda e do Talibã.",
        propaganda: {
            sides: [
                {
                    name: "União Soviética",
                    slogans: [
                        "Proteção da revolução",
                        "Estabilidade regional"
                    ],
                    mediaOutlets: [
                        "Pravda"
                    ],
                    techniques: [
                        "Apelo ao internacionalismo",
                        "Demonização dos mujahideen"
                    ]
                },
                {
                    name: "Mujahideen",
                    slogans: [
                        "Jihad contra os infiéis",
                        "Liberdade para o Afeganistão"
                    ],
                    mediaOutlets: [
                        "Rádio Kabul"
                    ],
                    techniques: [
                        "Apelo à religião",
                        "Medo da ocupação estrangeira"
                    ]
                }
            ],
            analysis: "A propaganda soviética enfatizava a proteção da revolução, enquanto os mujahideen usavam o apelo religioso para mobilizar apoio."
        },
        theories: [
            {
                title: "Armadilha Afegã",
                description: "Os EUA deliberadamente encorajaram a URSS a invadir o Afeganistão para criar seu próprio 'Vietnã'.",
                evidence: "Documentos desclassificados da CIA"
            },
            {
                title: "Colapso da URSS",
                description: "A guerra acelerou o colapso da União Soviética devido ao custo financeiro e político.",
                evidence: "Relatórios econômicos soviéticos"
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mortar_attack_on_Shigal_Tarna_garrison%2C_Kunar_Province%2C_87.jpg",
        relatedNews: [
            {
                title: "EUA fornecem armas aos mujahideen",
                description: "Os EUA começaram a fornecer armas e treinamento aos mujahideen através da Operação Ciclone.",
                source: "The Washington Post",
                date: "1980-01-15"
            },
            {
                title: "Retirada soviética do Afeganistão",
                description: "As últimas tropas soviéticas deixaram o Afeganistão após nove anos de conflito.",
                source: "BBC News",
                date: "1989-02-15"
            }
        ],
        financialInfo: {
            financialImpact: "A guerra teve um impacto financeiro devastador na União Soviética, contribuindo para sua crise econômica.",
            banks: [
                {
                    name: "Gosbank",
                    country: "União Soviética",
                    owners: [
                        {
                            name: "Nikolai Bulganin",
                            religion: "Ateísmo de Estado"
                        }
                    ]
                },
                {
                    name: "Bank of America",
                    country: "Estados Unidos",
                    owners: [
                        {
                            name: "A.P. Giannini",
                            religion: "Católico"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "CIA",
                    type: "government",
                    side: "Mujahideen",
                    amount: "Bilhões de dólares",
                    currency: "USD"
                },
                {
                    name: "Banco Nacional do Afeganistão",
                    type: "government",
                    side: "União Soviética",
                    amount: "Desconhecido",
                    currency: "Afegane"
                }
            ]
        },
        casualties: {
            military: "15,000",
            civilian: "1 milhão",
            total: "1.015 milhões"
        },
        keyFigures: [
            {
                name: "Mikhail Gorbachev",
                role: "Líder da União Soviética",
                side: "União Soviética",
                fate: "Ordenou a retirada das tropas em 1989"
            },
            {
                name: "Osama bin Laden",
                role: "Líder mujahideen",
                side: "Mujahideen",
                fate: "Fundou a Al-Qaeda após a guerra"
            }
        ]
    },
    {
        id: "gulf-war",
        year: 1990,
        title: "Guerra do Golfo",
        description: "Conflito entre o Iraque e uma coalizão internacional liderada pelos EUA após a invasão do Kuwait pelo Iraque.",
        mediaPortrayal: "A primeira 'guerra em tempo real', com a CNN transmitindo 24 horas por dia, criando uma nova era de cobertura de guerra midiática.",
        propaganda: {
            sides: [
                {
                    name: "Coalizão Internacional",
                    slogans: [
                        "Liberdade para o Kuwait",
                        "Contra a agressão iraquiana"
                    ],
                    mediaOutlets: [
                        "CNN",
                        "BBC"
                    ],
                    techniques: [
                        "Apelo à justiça internacional",
                        "Demonização de Saddam Hussein"
                    ]
                },
                {
                    name: "Iraque",
                    slogans: [
                        "Defesa da soberania",
                        "Contra o imperialismo ocidental"
                    ],
                    mediaOutlets: [
                        "Al Jazeera"
                    ],
                    techniques: [
                        "Apelo ao nacionalismo",
                        "Medo da dominação estrangeira"
                    ]
                }
            ],
            analysis: "A propaganda da coalizão focou na defesa da soberania do Kuwait, enquanto o Iraque tentou retratar o conflito como uma luta contra o imperialismo ocidental."
        },
        theories: [
            {
                title: "Teoria do Bebê Incubadora",
                description: "Um relato fabricado sobre soldados iraquianos matando bebês em incubadoras no Kuwait foi usado para ganhar apoio público para a guerra.",
                evidence: "Testemunhos posteriormente desmentidos"
            },
            {
                title: "Armadilha Diplomática",
                description: "Os EUA enganaram Saddam Hussein, sugerindo que não interviriam se ele invadisse o Kuwait.",
                evidence: "Documentos diplomáticos desclassificados"
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/3/35/WarGulf_photobox.jpg",
        relatedNews: [
            {
                title: "Operação Tempestade no Deserto começa",
                description: "A coalizão internacional inicia a operação militar para libertar o Kuwait.",
                source: "CNN",
                date: "1991-01-17"
            },
            {
                title: "Retirada das tropas iraquianas do Kuwait",
                description: "As forças iraquianas retiram-se do Kuwait após intensos bombardeios.",
                source: "BBC",
                date: "1991-02-28"
            }
        ],
        financialInfo: {
            financialImpact: "A guerra teve um impacto financeiro significativo, especialmente para o Iraque, que enfrentou sanções econômicas prolongadas.",
            banks: [
                {
                    name: "Federal Reserve",
                    country: "Estados Unidos",
                    owners: [
                        {
                            name: "Alan Greenspan",
                            religion: "Judeu"
                        }
                    ]
                },
                {
                    name: "Banco Central do Iraque",
                    country: "Iraque",
                    owners: [
                        {
                            name: "Saddam Hussein",
                            religion: "Islâmico"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Complexo Industrial-Militar",
                    type: "corporation",
                    side: "Estados Unidos",
                    amount: "Bilhões de dólares",
                    currency: "USD"
                },
                {
                    name: "Banco Nacional do Kuwait",
                    type: "government",
                    side: "Coalizão Internacional",
                    amount: "Desconhecido",
                    currency: "Dinar Kuwaitiano"
                }
            ]
        },
        casualties: {
            military: "25,000",
            civilian: "3,500",
            total: "28,500"
        },
        keyFigures: [
            {
                name: "George H. W. Bush",
                role: "Presidente dos EUA",
                side: "Coalizão Internacional",
                fate: "Concluiu o mandato em 1993"
            },
            {
                name: "Saddam Hussein",
                role: "Presidente do Iraque",
                side: "Iraque",
                fate: "Capturado em 2003 e executado em 2006"
            }
        ]
    },
    {
        id: "yugoslavia-wars",
        year: 1991,
        title: "Guerras Iugoslavas",
        description: "Série de conflitos étnicos e guerras de independência que levaram à dissolução da Iugoslávia.",
        mediaPortrayal: "A cobertura midiática frequentemente simplificou os conflitos em termos étnicos, omitindo os complexos fatores políticos e econômicos.",
        propaganda: {
            sides: [
                {
                    name: "Sérvia",
                    slogans: [
                        "Defesa da Iugoslávia",
                        "Proteção dos sérvios"
                    ],
                    mediaOutlets: [
                        "Politika"
                    ],
                    techniques: [
                        "Apelo ao nacionalismo",
                        "Medo da desintegração"
                    ]
                },
                {
                    name: "Croácia",
                    slogans: [
                        "Independência e liberdade",
                        "Defesa da identidade croata"
                    ],
                    mediaOutlets: [
                        "Večernji list"
                    ],
                    techniques: [
                        "Apelo à autodeterminação",
                        "Demonização dos sérvios"
                    ]
                }
            ],
            analysis: "A propaganda foi usada para justificar as ações de ambos os lados, com narrativas que frequentemente exageravam ou distorciam os fatos."
        },
        theories: [
            {
                title: "Conspiração Ocidental",
                description: "Potências ocidentais deliberadamente encorajaram a desintegração da Iugoslávia para enfraquecer um estado socialista independente."
            },
            {
                title: "Controvérsia de Srebrenica",
                description: "Teorias contestam a natureza e escala do massacre de Srebrenica, embora evidências substanciais o confirmem."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Collage_Yugoslav_wars.jpg",
        relatedNews: [
            {
                title: "Massacre de Srebrenica choca o mundo",
                description: "O massacre de mais de 8.000 homens e meninos bósnios em Srebrenica é considerado o pior massacre na Europa desde a Segunda Guerra Mundial.",
                source: "BBC News",
                date: "1995-07-11"
            },
            {
                title: "Acordo de Dayton encerra a guerra",
                description: "O Acordo de Dayton, assinado em 1995, põe fim à guerra na Bósnia e estabelece uma nova estrutura política para a região.",
                source: "The New York Times",
                date: "1995-12-14"
            }
        ],
        financialInfo: {
            financialImpact: "A guerra teve um impacto financeiro devastador na região, com infraestrutura destruída e economias em colapso.",
            banks: [
                {
                    name: "Banco Nacional da Sérvia",
                    country: "Sérvia",
                    owners: [
                        {
                            name: "Slobodan Milošević",
                            religion: "Ortodoxo"
                        }
                    ]
                },
                {
                    name: "Banco Nacional da Croácia",
                    country: "Croácia",
                    owners: [
                        {
                            name: "Franjo Tuđman",
                            religion: "Católico"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "União Europeia",
                    type: "organization",
                    side: "Croácia",
                    amount: "Bilhões de euros",
                    currency: "EUR"
                },
                {
                    name: "Rússia",
                    type: "government",
                    side: "Sérvia",
                    amount: "Desconhecido",
                    currency: "Rublo"
                }
            ]
        },
        casualties: {
            military: "140,000",
            civilian: "100,000",
            total: "240,000"
        },
        keyFigures: [
            {
                name: "Slobodan Milošević",
                role: "Presidente da Sérvia",
                side: "Sérvia",
                fate: "Morreu durante o julgamento no Tribunal de Haia em 2006"
            },
            {
                name: "Franjo Tuđman",
                role: "Presidente da Croácia",
                side: "Croácia",
                fate: "Morreu em 1999"
            }
        ]
    },
    {
        id: "september-11-2001",
        year: 2001,
        title: "Ataques de 11 de Setembro",
        description: "Os ataques de 11 de setembro de 2001 foram uma série de atentados terroristas coordenados realizados pelo grupo extremista Al-Qaeda, envolvendo o sequestro de aviões comerciais que foram usados para atacar alvos icônicos nos Estados Unidos: as Torres Gêmeas do World Trade Center em Nova York e o Pentágono em Washington, D.C. Outro voo, o United Airlines Flight 93, caiu em um campo na Pensilvânia após passageiros tentarem retomar o controle da aeronave.",
        mediaPortrayal: "O 11 de setembro foi amplamente coberto pela mídia global. As imagens das Torres Gêmeas sendo atingidas e colapsando se tornaram símbolos poderosos do evento. Filmes, documentários e notícias continuam a retratar o impacto emocional, a resposta imediata e as consequências políticas e militares desses ataques.",
        propaganda: {
            sides: [
                {
                    name: "Estados Unidos e aliados",
                    slogans: [
                        "Lutar contra o terrorismo",
                        "Paz e segurança mundial",
                        "Justiça para as vítimas do 11 de setembro"
                    ],
                    mediaOutlets: [
                        "Notícias de televisão",
                        "Jornais",
                        "Documentários",
                        "Cartazes de campanha"
                    ],
                    techniques: [
                        "Apelo à união nacional",
                        "Mobilização por meio do patriotismo",
                        "Demonização do inimigo"
                    ]
                },
                {
                    name: "Al-Qaeda",
                    slogans: [
                        "Guerra santa",
                        "Expulsar os infiéis",
                        "Libertação dos muçulmanos"
                    ],
                    mediaOutlets: [
                        "Vídeos e mensagens online",
                        "Manifestações públicas",
                        "Meios de comunicação jihadistas"
                    ],
                    techniques: [
                        "Apelo à religião",
                        "Guerra psicológica",
                        "Utilização de mídia como propaganda de luta contra o ocidente"
                    ]
                }
            ],
            analysis: "A propaganda dos Estados Unidos foi focada em unir a nação contra a ameaça terrorista e justificar a invasão do Afeganistão. A mídia destacou a reação emocional da população, enquanto o lado da Al-Qaeda usou a imagem do 'inimigo opressor' e da 'luta pela liberdade religiosa' como uma ferramenta de mobilização."
        },
        theories: [
            {
                title: "O impacto da guerra ao terror",
                description: "Os ataques de 11 de setembro marcaram o início da chamada 'Guerra ao Terror', uma série de operações militares, incluindo a invasão do Afeganistão e do Iraque, com o objetivo de erradicar organizações terroristas como a Al-Qaeda.",
                evidence: "O lançamento da Operação Enduring Freedom e a posterior ocupação militar do Afeganistão são exemplos de como os ataques do 11 de setembro foram usados para justificar intervenções militares em várias regiões do mundo."
            },
            {
                title: "Teoria do Inside Job",
                description: "Alguns afirmam que os ataques de 11 de setembro foram planejados ou permitidos pelo governo dos EUA para justificar a invasão do Afeganistão e do Iraque.",
                evidence: "Relatórios de investigações oficiais, como os da Comissão do 11 de Setembro, desmentem essas alegações, afirmando que não houve envolvimento do governo dos EUA nos ataques."
            },
            {
                title: "Teoria da Demolição Controlada",
                description: "Teóricos alegam que as Torres Gêmeas e o prédio 7 do World Trade Center foram destruídos por explosões controladas, não por colisões de aviões.",
                evidence: "Investigações do NIST (Instituto Nacional de Padrões e Tecnologia) concluem que o colapso das torres foi devido a incêndios causados pelos impactos dos aviões, sem evidência de explosivos."
            },
            {
                title: "Teoria da Invasão do Afeganistão como Justificativa",
                description: "Após os ataques de 11 de setembro, alguns especulam que o governo dos EUA já havia planejado a invasão do Afeganistão como parte de uma estratégia geopolítica e usou os ataques como pretexto.",
                evidence: "Documentos internos, como memorandos e relatórios de inteligência, indicam que a invasão do Afeganistão foi uma resposta aos ataques, mas também parte de uma política de longo prazo para combater o terrorismo e a Al-Qaeda."
            },
            {
                title: "Teoria do Vingador do 11 de Setembro",
                description: "Alguns alegam que o 11 de setembro foi uma resposta direta aos ataques anteriores dos EUA no Oriente Médio, incluindo o apoio a Israel e as intervenções militares em países muçulmanos.",
                evidence: "Estudos e declarações públicas de membros da Al-Qaeda, como Osama bin Laden, indicam que a motivação por trás do ataque foi a oposição à política externa dos EUA na região."
            },
            {
                title: "Teoria dos Aviões Não Terem Colidido",
                description: "Há quem acredite que os aviões não colidiram com os alvos ou que as colisões foram falsas, sendo manipuladas por uma rede de manipulação mediática.",
                evidence: "Essa teoria é amplamente refutada por gravações de áudio, vídeos e testemunhos de sobreviventes e investigadores, que confirmam a colisão dos aviões com as torres."
            },
            {
                title: "Teoria do Controle da Mídia e Manipulação",
                description: "Algumas pessoas acreditam que a cobertura da mídia foi manipulada para criar uma narrativa de medo e justificar as políticas de segurança e guerra no exterior.",
                evidence: "A cobertura da mídia foi intensiva, mas a ideia de que foi manipulada sistematicamente para criar medo não é suportada por investigações independentes sobre o papel da mídia durante o evento."
            },
            {
                title: "Teoria do Conhecimento Antecipado",
                description: "Surgiu a especulação de que algumas pessoas sabiam dos ataques com antecedência, seja por parte do governo dos EUA ou agências de inteligência estrangeiras.",
                evidence: "Diversas investigações do governo e relatórios da Comissão do 11 de setembro mostraram que, embora houvesse falhas de inteligência, não houve evidência concreta de que o governo dos EUA tenha sabido dos ataques com antecedência."
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/WTC_9-11_Destruction.jpg",
        relatedNews: [
            {
                title: "Ataques terroristas de 11 de setembro de 2001",
                description: "Em 11 de setembro de 2001, os Estados Unidos sofreram ataques terroristas coordenados por Al-Qaeda, resultando na destruição das Torres Gêmeas em Nova York e ataques ao Pentágono.",
                source: "BBC News",
                date: "2001-09-11"
            },
            {
                title: "Guerra ao Terror: Invasão do Afeganistão",
                description: "Após os ataques de 11 de setembro, os Estados Unidos, com o apoio de aliados internacionais, invadiram o Afeganistão em outubro de 2001 para remover o regime talibã e combater a Al-Qaeda.",
                source: "CNN",
                date: "2001-10-07"
            },
            {
                title: "Ataques de 11 de setembro: Um dia que mudou o mundo",
                description: "Cobertura ao vivo dos ataques de 11 de setembro e das consequências imediatas para a segurança global e os EUA.",
                source: "CNN",
                date: "2001-09-11"
            },
            {
                title: "Governo dos EUA responde aos ataques com a guerra no Afeganistão",
                description: "Após os ataques de 11 de setembro, os EUA iniciaram a guerra no Afeganistão contra o Talibã e Al-Qaeda.",
                source: "BBC",
                date: "2001-10-07"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Goldman Sachs",
                    country: "Estados Unidos",
                    assets: "O setor financeiro dos Estados Unidos, incluindo bancos como Goldman Sachs, enfrentou um impacto significativo após os ataques, mas também se beneficiou com o aumento da demanda por serviços relacionados à reconstrução.",
                    amount: "Investimentos em segurança e reconstrução",
                    currency: "Dólar Americano",
                    owners: [
                        {
                            name: "Lloyd Blankfein",
                            religion: "Judaísmo",
                            politicalAffiliation: "Democrata"
                        }
                    ],
                    side: "Aliados"
                },
                {
                    name: "Afghan Central Bank",
                    country: "Afeganistão",
                    assets: "Após a queda do regime talibã, o Afeganistão iniciou uma reconstrução que envolveu a reestruturação de seu sistema financeiro com apoio internacional.",
                    amount: "Reconstrução financeira e ajuda internacional",
                    currency: "Afegane",
                    owners: [],
                    side: "Aliados"
                }
            ],
            financiers: [
                {
                    name: "Governo dos EUA",
                    type: "government",
                    amount: "Bilhões de dólares foram investidos em segurança interna, defesa e operações militares.",
                    assets: "A maior parte do financiamento foi direcionada para o Departamento de Defesa e segurança nacional, com bilhões gastos em operações militares e programas de inteligência.",
                    religion: "Cristianismo",
                    currency: "Dólar Americano",
                    side: "Aliados"
                }
            ],
            financialImpact: "Os ataques causaram uma enorme crise econômica global, com os mercados financeiros sendo severamente impactados nas semanas seguintes. A guerra subsequente no Afeganistão e os custos da segurança interna também causaram grandes despesas, que resultaram em bilhões de dólares sendo gastos nos anos seguintes."
        },
        casualties: {
            military: "Cerca de 3.000 civis morreram nos ataques de 11 de setembro, e centenas de militares morreram nas operações subsequentes no Afeganistão.",
            civilian: "Cerca de 3.000 civis mortos nos atentados terroristas.",
            total: "Cerca de 3.000 mortos diretamente no 11 de setembro e dezenas de milhares em conflitos subsequentes relacionados à 'Guerra ao Terror'."
        },
        keyFigures: [
            {
                name: "Osama bin Laden",
                role: "Líder da Al-Qaeda",
                side: "Al-Qaeda",
                fate: "Bin Laden foi capturado e morto pelos EUA em 2011 após uma operação em Abbottabad, Paquistão."
            },
            {
                name: "George W. Bush",
                role: "Presidente dos Estados Unidos",
                side: "Aliados",
                fate: "Bush liderou a resposta militar aos ataques, com a invasão do Afeganistão e do Iraque."
            }
        ],
        winners: [
            {
                name: "Estados Unidos e aliados",
                country: "Estados Unidos",
                side: "Aliados",
                date: "2001-09-11"
            }
        ]
    },
    {
        id: "war-on-terror",
        year: 2001,
        title: "Guerra ao Terror",
        description: "Campanha global liderada pelos EUA após os ataques de 11 de setembro, incluindo guerras no Afeganistão e Iraque.",
        mediaPortrayal: "A mídia ocidental adotou amplamente a narrativa oficial do 'choque de civilizações', enquanto mídias árabes frequentemente enquadraram como imperialismo americano.",
        propaganda: {
            sides: [
                {
                    name: "Estados Unidos",
                    slogans: [
                        "Liberdade e Segurança",
                        "Contra o terrorismo"
                    ],
                    mediaOutlets: [
                        "CNN",
                        "Fox News"
                    ],
                    techniques: [
                        "Medo do terrorismo",
                        "Apelo ao patriotismo"
                    ]
                },
                {
                    name: "Al-Qaeda",
                    slogans: [
                        "Jihad contra os EUA",
                        "Defesa do Islã"
                    ],
                    mediaOutlets: [
                        "Al Jazeera"
                    ],
                    techniques: [
                        "Apelo à religião",
                        "Demonização dos EUA"
                    ]
                }
            ],
            analysis: "A propaganda americana focou na defesa da liberdade e segurança, enquanto a Al-Qaeda usou o apelo religioso para justificar suas ações."
        },
        theories: [
            {
                title: "Teorias da Conspiração sobre o 11 de Setembro",
                description: "Teorias sugerem envolvimento ou conhecimento prévio do governo dos EUA, embora refutadas por evidências.",
                evidence: "Relatórios oficiais de investigação"
            },
            {
                title: "Armas de Destruição em Massa",
                description: "A afirmação de que o Iraque possuía armas de destruição em massa, usada para justificar a invasão de 2003, provou-se falsa.",
                evidence: "Relatórios de inspeção da ONU"
            }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/War_on_Terror_montage1.png/960px-War_on_Terror_montage1.png",
        relatedNews: [
            {
                title: "Ataques de 11 de Setembro",
                description: "Os ataques terroristas de 11 de setembro de 2001 resultaram na morte de quase 3.000 pessoas.",
                source: "The New York Times",
                date: "2001-09-11"
            },
            {
                title: "Invasão do Afeganistão",
                description: "Os EUA invadiram o Afeganistão em outubro de 2001 para derrubar o regime Talibã.",
                source: "BBC News",
                date: "2001-10-07"
            }
        ],
        financialInfo: {
            financialImpact: "A guerra teve um impacto financeiro significativo, com custos estimados em trilhões de dólares.",
            banks: [
                {
                    name: "Federal Reserve",
                    country: "Estados Unidos",
                    owners: [
                        {
                            name: "Alan Greenspan",
                            religion: "Judeu"
                        }
                    ]
                },
                {
                    name: "Banco Central do Iraque",
                    country: "Iraque",
                    owners: [
                        {
                            name: "Saddam Hussein",
                            religion: "Islâmico"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Complexo Industrial-Militar",
                    type: "corporation",
                    side: "Estados Unidos",
                    amount: "Trilhões de dólares",
                    currency: "USD"
                },
                {
                    name: "Banco Nacional do Afeganistão",
                    type: "government",
                    side: "Afeganistão",
                    amount: "Desconhecido",
                    currency: "Afegane"
                }
            ]
        },
        casualties: {
            military: "7,000",
            civilian: "200,000",
            total: "207,000"
        },
        keyFigures: [
            {
                name: "George W. Bush",
                role: "Presidente dos EUA",
                side: "Estados Unidos",
                fate: "Concluiu o mandato em 2009"
            },
            {
                name: "Osama bin Laden",
                role: "Líder da Al-Qaeda",
                side: "Al-Qaeda",
                fate: "Morto em 2011"
            }
        ]
    },
    {
        id: "arab-spring",
        year: 2010,
        title: "Primavera Árabe e Conflitos Resultantes",
        description: "Série de protestos, levantes e guerras civis no Oriente Médio e Norte da África, incluindo a Guerra Civil Síria.",
        mediaPortrayal: "Inicialmente retratada como uma onda democrática, a narrativa midiática tornou-se mais complexa conforme os conflitos evoluíram, especialmente na Síria e Líbia.",
        propaganda: {
            sides: [
                {
                    name: "Governos Árabes",
                    slogans: [
                        "Estabilidade e segurança",
                        "Contra o caos"
                    ],
                    mediaOutlets: [
                        "Al Arabiya"
                    ],
                    techniques: [
                        "Medo da instabilidade",
                        "Apelo à ordem"
                    ]
                },
                {
                    name: "Manifestantes",
                    slogans: [
                        "Liberdade e dignidade",
                        "O povo quer a queda do regime"
                    ],
                    mediaOutlets: [
                        "Al Jazeera"
                    ],
                    techniques: [
                        "Apelo à justiça social",
                        "Demonização dos regimes"
                    ]
                }
            ],
            analysis: "A propaganda dos governos enfatizava a estabilidade, enquanto os manifestantes usavam o apelo à liberdade e justiça social."
        },
        theories: [
            {
                title: "Conspiração Ocidental",
                description: "Algumas narrativas sugerem que potências ocidentais orquestraram os levantes para reorganizar o Oriente Médio conforme seus interesses."
            },
            {
                title: "Revolução Twitter",
                description: "Outros argumentam que redes sociais como Twitter e Facebook foram instrumentais em facilitar os protestos."
            }
        ],
        image: "placeholder.svg",
        relatedNews: [
            {
                title: "Autoimolação de Mohamed Bouazizi",
                description: "O ato de protesto de Mohamed Bouazizi em Túnis desencadeou a onda de protestos na região.",
                source: "BBC News",
                date: "2010-12-17"
            },
            {
                title: "Queda de Hosni Mubarak no Egito",
                description: "Após 18 dias de protestos, Hosni Mubarak renuncia à presidência do Egito.",
                source: "Al Jazeera",
                date: "2011-02-11"
            }
        ],
        financialInfo: {
            financialImpact: "Os conflitos tiveram um impacto financeiro devastador na região, com economias em colapso e infraestrutura destruída.",
            banks: [
                {
                    name: "Banco Central do Egito",
                    country: "Egito",
                    owners: [
                        {
                            name: "Farouk El-Okdah",
                            religion: "Islâmico"
                        }
                    ]
                },
                {
                    name: "Banco Central da Tunísia",
                    country: "Tunísia",
                    owners: [
                        {
                            name: "Mustapha Kamel Nabli",
                            religion: "Islâmico"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "União Europeia",
                    type: "organization",
                    side: "Manifestantes",
                    amount: "Bilhões de euros",
                    currency: "EUR"
                },
                {
                    name: "Estados Unidos",
                    type: "government",
                    side: "Manifestantes",
                    amount: "Bilhões de dólares",
                    currency: "USD"
                }
            ]
        },
        casualties: {
            military: "Desconhecido",
            civilian: "Mais de 100,000",
            total: "Mais de 100,000"
        },
        keyFigures: [
            {
                name: "Mohamed Bouazizi",
                role: "Vendedor ambulante",
                side: "Manifestantes",
                fate: "Morreu em 2011"
            },
            {
                name: "Hosni Mubarak",
                role: "Presidente do Egito",
                side: "Governos Árabes",
                fate: "Renunciou em 2011"
            }
        ]
    },
    {
        id: "snowden-leaks-2013",
        year: 2013,
        title: "Vazamentos de Edward Snowden sobre vigilância global",
        description: "Em 2013, o ex-técnico da CIA e contratante da NSA Edward Snowden vazou documentos classificados que revelavam programas de vigilância global em massa conduzidos pelos EUA e aliados.",
        mediaPortrayal: "Snowden foi retratado como herói pelos defensores da privacidade e como traidor pelo governo dos EUA. A mídia internacional deu ampla cobertura aos vazamentos.",
        propaganda: {
            sides: [
                {
                    name: "Governo dos EUA",
                    slogans: [
                        "Traição à pátria",
                        "Segurança nacional em risco",
                        "Snowden é um criminoso"
                    ],
                    mediaOutlets: [
                        "Fox News",
                        "CNN",
                        "Washington Post"
                    ],
                    techniques: [
                        "Apelo ao medo",
                        "Demonização do whistleblower",
                        "Minimização das revelações"
                    ]
                },
                {
                    name: "Defensores da Privacidade",
                    slogans: [
                        "Herói da liberdade",
                        "Proteção da privacidade",
                        "Vigilância ilegal exposta"
                    ],
                    mediaOutlets: [
                        "The Guardian",
                        "Der Spiegel",
                        "The Intercept"
                    ],
                    techniques: [
                        "Foco em direitos civis",
                        "Exposição de abusos",
                        "Humanização de Snowden"
                    ]
                }
            ],
            analysis: "O caso Snowden tornou-se um campo de batalha narrativo entre segurança nacional e liberdades civis, com cada lado usando diferentes técnicas de enquadramento midiático."
        },
        theories: [
            {
                title: "Vigilância global em massa pela NSA",
                description: "A NSA coletava dados de bilhões de pessoas sem mandado judicial",
                evidence: "Documentos PRISM, XKeyscore e outros comprovando coleta de metadados"
            },
            {
                title: "Espionagem de aliados dos EUA",
                description: "EUA espionavam líderes de países aliados como Alemanha e Brasil",
                evidence: "Documentos mostrando espionagem contra Angela Merkel e Dilma Rousseff"
            },
            {
                title: "Colaboração de empresas de tecnologia",
                description: "Grandes empresas de tecnologia colaboravam secretamente com a NSA",
                evidence: "Slides da NSA mostrando participação da Microsoft, Google, Apple e outras no PRISM"
            },
            {
                title: "Interceptação de cabos submarinos",
                description: "NSA e GCHQ interceptavam comunicações em cabos de fibra óptica submarinos",
                evidence: "Documentos TEMPORA e UPSTREAM comprovando a prática"
            },
            {
                title: "Criação de backdoors em equipamentos",
                description: "Agências de inteligência inseriam vulnerabilidades deliberadas em sistemas",
                evidence: "Documentos sobre programas como BULLRUN e EDGEHILL"
            }
        ],
        image: "https://example.com/snowden-portrait.jpg",
        relatedNews: [
            {
                title: "The Guardian publica primeiros documentos Snowden",
                description: "Jornal britânico inicia série de reportagens baseadas nos vazamentos",
                source: "The Guardian",
                date: "06/2013"
            },
            {
                title: "EUA acusam Snowden de espionagem",
                description: "Departamento de Justiça dos EUA apresenta acusações formais contra Snowden",
                source: "Washington Post",
                date: "06/2013"
            },
            {
                title: "Snowden recebe asilo temporário na Rússia",
                description: "Após ficar preso no aeroporto de Moscou, Rússia concede asilo por 1 ano",
                source: "BBC",
                date: "08/2013"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Bank of America",
                    country: "USA",
                    side: "Governo dos EUA",
                    currency: "USD",
                    owners: [
                        {
                            name: "Vanguard Group",
                            type: "Institutional Investor",
                            religion: "N/A",
                            politicalAffiliation: "N/A",
                            president: {
                                name: "F. William McNabb III",
                                religion: "Presbyterian (Protestant)",
                                fromYear: 2008,
                                toYear: 2017
                            }
                        },
                        {
                            name: "BlackRock",
                            type: "Institutional Investor",
                            religion: "N/A",
                            politicalAffiliation: "N/A",
                            president: {
                                name: "Larry Fink",
                                religion: "Judaism",
                                fromYear: 1988
                            }
                        },
                        {
                            name: "Bill & Melinda Gates Foundation",
                            type: "Non-profit Organization",
                            religion: "Christianity",
                            politicalAffiliation: "Democratic-leaning",
                            president: {
                                name: "Jeff Raikes",
                                religion: "Methodist (Protestant Christianity)",
                                fromYear: 2008,
                                toYear: 2014
                            }
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Vanguard Group",
                    type: "organization",
                    amount: "Approx. 7-8% ownership",
                    assets: "Large multi-billion dollar investment portfolio",
                    religion: "N/A",
                    currency: "USD",
                    side: "Private",
                    president: {
                        name: "F. William McNabb III",
                        religion: "Presbyterian (Protestant)",
                        fromYear: 2008,
                        toYear: 2017
                    }
                },
                {
                    name: "BlackRock",
                    type: "organization",
                    amount: "Approx. 6-7% ownership",
                    assets: "Multi-billion dollar investment funds",
                    religion: "N/A",
                    currency: "USD",
                    side: "Private",
                    president: {
                        name: "Larry Fink",
                        religion: "Judaism",
                        fromYear: 1988
                    }
                },
                {
                    name: "Bill & Melinda Gates Foundation",
                    type: "organization",
                    amount: "Approx. 1.5% ownership",
                    assets: "Approx. $40 billion foundation",
                    religion: "Christianity",
                    currency: "USD",
                    side: "Private",
                    president: {
                        name: "Jeff Raikes",
                        religion: "Methodist (Protestant Christianity)",
                        fromYear: 2008,
                        toYear: 2014
                    }
                }
            ],
            financialImpact: "As revelações causaram perdas financeiras para empresas de tecnologia e custos legais para governos envolvidos"
        },
        keyFigures: [
            {
                name: "Edward Snowden",
                role: "Whistleblower",
                side: "Defensores da Privacidade",
                fate: "Asilado na Rússia"
            },
            {
                name: "Glenn Greenwald",
                role: "Jornalista do The Guardian",
                side: "Defensores da Privacidade",
                fate: "Co-fundador do The Intercept"
            },
            {
                name: "Barack Obama",
                role: "Presidente dos EUA",
                side: "Governo dos EUA",
                fate: "Defendeu programas de vigilância"
            }
        ],
        winners: [
            {
                name: "Movimento pela privacidade digital",
                country: "Global",
                side: "Defensores da Privacidade",
                date: "2013-ongoing"
            }
        ]
    },
    {
        id: "ukraine-conflict",
        year: 2014,
        title: "Conflito na Ucrânia",
        description: "Conflito em andamento que começou com a anexação da Crimeia pela Rússia e escalou para uma guerra em grande escala em 2022, resultando em significativas mudanças geopolíticas e mortes de importantes figuras.",
        mediaPortrayal: "A guerra de informação tornou-se tão crucial quanto o conflito físico, com narrativas vastamente diferentes apresentadas pela mídia ocidental e russa.",
        propaganda: {
            sides: [
                {
                    name: "Ucrânia e aliados ocidentais",
                    slogans: [
                        "Defender a soberania",
                        "Resistência contra a agressão russa"
                    ],
                    mediaOutlets: [
                        "BBC",
                        "CNN",
                        "Deutsche Welle"
                    ],
                    techniques: [
                        "Demonização da Rússia",
                        "Apelo à democracia",
                        "Emoção e solidariedade internacional"
                    ]
                },
                {
                    name: "Rússia e aliados",
                    slogans: [
                        "Proteção de russos étnicos",
                        "Contra o expansionismo da OTAN"
                    ],
                    mediaOutlets: [
                        "RT",
                        "Sputnik"
                    ],
                    techniques: [
                        "Reescrita histórica",
                        "Desinformação estratégica",
                        "Apelo à identidade nacional"
                    ]
                }
            ],
            analysis: "A propaganda de ambos os lados do conflito molda profundamente a percepção global, utilizando tecnologia, redes sociais e agências de notícias para influenciar a narrativa internacional."
        },
        theories: [
            {
                title: "Expansão da OTAN como catalisador",
                description: "Narrativas competitivas sobre as origens do conflito incluem teorias sobre a ameaça percebida pela Rússia em relação à expansão da OTAN até suas fronteiras."
            },
            {
                title: "Influência dos oligarcas",
                description: "Teorias sobre o papel dos oligarcas ucranianos e russos no financiamento, direcionamento e desestabilização do conflito em benefício próprio."
            },
            {
                title: "Mortes misteriosas de oligarcas",
                description: "Diversas mortes suspeitas de oligarcas russos desde o início do conflito levantaram especulações sobre queima de arquivos ou disputas internas."
            },
            {
                title: "Interferência ocidental em 2014",
                description: "Teorias sugerem envolvimento ativo de potências ocidentais na mudança de regime em 2014, particularmente no apoio aos protestos de Maidan e na destituição de Yanukovych."
            }
        ],
        relatedNews: [
            {
                title: "Morte suspeita de vários oligarcas russos desde o início da guerra",
                description: "Desde 2022, uma série de mortes envolvendo executivos de empresas de energia russas levanta suspeitas sobre motivações políticas ou econômicas.",
                source: "Reuters",
                date: "2022-12-15"
            },
            {
                title: "Mudanças significativas no controle de empresas energéticas ucranianas",
                description: "Após a invasão, o governo ucraniano consolidou o controle de ativos energéticos estratégicos com apoio de entidades internacionais.",
                source: "Ukrinform",
                date: "2023-04-05"
            },
            {
                title: "Sanções ocidentais afetam estrutura bancária russa",
                description: "As sanções lideradas pelos EUA e UE levaram ao isolamento de bancos russos do sistema SWIFT e a uma reestruturação do sistema financeiro do país.",
                source: "Financial Times",
                date: "2022-03-01"
            }
        ],
        financialInfo: {
            financialImpact: "O conflito causou abalos no mercado energético global, levou a reestruturações financeiras na Rússia e à dependência crescente da Ucrânia por ajuda internacional.",
            banks: [
                {
                    name: "Sberbank",
                    country: "Rússia",
                    owners: [
                        {
                            name: "Governo Russo",
                            religion: "Estado"
                        }
                    ]
                },
                {
                    name: "PrivatBank",
                    country: "Ucrânia",
                    owners: [
                        {
                            name: "Estado Ucraniano",
                            religion: "Estado"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Banco Mundial",
                    type: "organization",
                    side: "Ucrânia",
                    amount: "Bilhões de USD",
                    currency: "US Dollar"
                },
                {
                    name: "FMI",
                    type: "organization",
                    side: "Ucrânia",
                    amount: "Bilhões de USD",
                    currency: "US Dollar"
                },
                {
                    name: "Bancos de Desenvolvimento Europeus",
                    type: "organization",
                    side: "Ucrânia",
                    amount: "Diversos",
                    currency: "Euro"
                },
                {
                    name: "BRICS New Development Bank",
                    type: "organization",
                    side: "Rússia (indiretamente)",
                    amount: "Desconhecido",
                    currency: "Multiple"
                }
            ]
        },
        image: "placeholder.svg"
    },
    {
        id: "mcafee_2020",
        year: 2020,
        title: "Vazamentos de John McAfee",
        description: "John McAfee, o controverso empresário de software antivírus, divulgou várias informações e teorias sobre vigilância, corrupção e manipulação de dados por governos e grandes corporações. McAfee se tornou um defensor feroz da liberdade digital e da privacidade, frequentemente vazando informações que indicavam abusos de poder por parte de governos, corporações e até de sistemas financeiros internacionais.",
        mediaPortrayal: "A mídia retratou McAfee como um defensor da privacidade e liberdade cibernética, mas também como uma figura excêntrica e polarizadora. Sua postura radical contra o governo e os sistemas financeiros foi amplamente discutida.",
        propaganda: {
            sides: [
                {
                    name: "John McAfee",
                    slogans: [
                        "Liberdade digital",
                        "Privacidade é um direito",
                        "Resistindo à vigilância"
                    ],
                    mediaOutlets: [
                        "Twitter",
                        "Reddit",
                        "YouTube"
                    ],
                    techniques: [
                        "Vazamento de informações",
                        "Divulgação de entrevistas e vídeos",
                        "Desafios públicos"
                    ]
                },
                {
                    name: "Governos e Corporations",
                    slogans: [
                        "Segurança nacional",
                        "Proteção contra ameaças",
                        "Antiterrorismo"
                    ],
                    mediaOutlets: [
                        "CNN",
                        "BBC",
                        "The New York Times"
                    ],
                    techniques: [
                        "Desinformação",
                        "Crítica pública a McAfee",
                        "Defesa da vigilância como necessária para a segurança"
                    ]
                }
            ],
            analysis: "A propaganda de McAfee focava em alertar o público sobre os abusos de privacidade e a vigilância em massa. Por outro lado, os governos e grandes corporações tentaram desacreditá-lo e defender o status quo da segurança digital como uma questão nacional."
        },
        theories: [
            {
                title: "Corrupção Governamental e Manipulação de Dados",
                description: "McAfee alegou que grandes governos e corporações estavam envolvidos na manipulação de dados pessoais para fins de controle social e político.",
                evidence: "Em vários tweets e entrevistas, McAfee afirmou que hackers patrocinados por governos estavam infiltrando sistemas financeiros globais e manipulando dados para fins políticos e econômicos. Ele também sugeriu que essas ações eram parte de uma conspiração para controlar a sociedade."
            },
            {
                title: "Vigilância em Massa e Violação de Privacidade",
                description: "McAfee revelou que as agências governamentais, como a NSA e o FBI, estavam invadindo e monitorando os dados privados dos cidadãos, violando seus direitos constitucionais.",
                evidence: "McAfee revelou, em suas plataformas pessoais e por meio de entrevistas, detalhes sobre o uso de tecnologias de vigilância em massa por várias agências, além de criticar o uso de programas como PRISM e XKeyscore que ele acreditava serem apenas a ponta do iceberg."
            },
            {
                title: "Manipulação e Desinformação por Grandes Corporações",
                description: "McAfee sugeriu que as grandes corporações estavam manipulando dados pessoais de usuários para maximizar lucros, além de influenciar políticas públicas através do controle da informação.",
                evidence: "Ele denunciou como empresas como Google e Facebook estavam coletando dados de usuários sem o consentimento informado, usando esses dados para publicidade direcionada e influenciando a opinião pública."
            },
            {
                title: "Conspiração contra a Criptomoeda",
                description: "McAfee afirmou que o governo e grandes bancos estavam trabalhando juntos para derrubar a criptomoeda e bloquear a adoção de alternativas descentralizadas ao sistema financeiro tradicional.",
                evidence: "Em várias postagens nas redes sociais, McAfee explicou como governos e bancos estavam tentando desacreditar o Bitcoin e outras criptomoedas, alegando que a ascensão da moeda digital representava uma ameaça ao controle centralizado das finanças globais."
            },
            {
                title: "Assassinato e Corrupção em Países Estrangeiros",
                description: "Em suas postagens públicas, McAfee também sugeriu que havia sido alvo de ataques e ameaças de assassinato devido às suas ações, com alegações de que ele estava sendo perseguido por governos devido ao que sabia sobre práticas de corrupção internacional.",
                evidence: "McAfee discutiu em detalhes como suas ações e suas investigações sobre corrupção governamental o haviam colocado em perigo, e ele chegou a sugerir que estava sendo perseguido por governos corruptos."
            }
        ],
        image: "URL_to_image_of_John_McAfee_or_related_image",
        relatedNews: [
            {
                title: "John McAfee denuncia espionagem em massa e corrupção governamental",
                description: "McAfee faz uma série de afirmações sobre a vigilância do governo dos EUA e de corporações globais, alegando manipulação de dados e invasão de privacidade.",
                source: "The Guardian",
                date: "2020-03-25"
            },
            {
                title: "John McAfee fala sobre sua luta contra governos e corporações",
                description: "McAfee compartilha suas experiências e teorias sobre corrupção governamental e controle corporativo, alertando sobre os riscos de privacidade.",
                source: "RT News",
                date: "2020-06-18"
            }
        ],
        financialInfo: {
            banks: [
                {
                    name: "Barclays",
                    country: "Reino Unido",
                    assets: "1,5 trilhões de dólares",
                    amount: "Não disponível",
                    currency: "GBP",
                    owners: [
                        {
                            name: "Jes Staley",
                            religion: "Cristianismo",
                            politicalAffiliation: "Desconhecida"
                        }
                    ],
                    side: "Corporação"
                }
            ],
            financiers: [
                {
                    name: "Governo dos EUA",
                    type: "government",
                    amount: "Investimentos em vigilância e tecnologia",
                    assets: "Bilhões de dólares em programas de segurança cibernética",
                    religion: "Cristianismo",
                    currency: "USD",
                    side: "Governo"
                }
            ],
            financialImpact: "Os vazamentos de McAfee destacaram o impacto das tecnologias de vigilância em massa nos direitos de privacidade e o controle global das finanças, afetando negativamente a liberdade digital e a segurança econômica."
        },
        casualties: {
            military: "Não aplicável",
            civilian: "Não aplicável",
            total: "Não aplicável"
        },
        keyFigures: [
            {
                name: "John McAfee",
                role: "Empresário e Defensor da Privacidade Digital",
                side: "Liberdade digital e privacidade",
                fate: "Morreu em 2021 enquanto estava preso na Espanha, aguardando extradição para os EUA"
            },
            {
                name: "Governos dos EUA e do Reino Unido",
                role: "Autoridades governamentais",
                side: "Vigilância e controle de dados",
                fate: "Envolvimento em investigações de privacidade e vigilância"
            }
        ],
        winners: [
            {
                name: "John McAfee",
                country: "Espanha (Exílio)",
                side: "Liberdade digital e privacidade",
                date: "2020"
            }
        ]
    },
    {
        id: "ai-wars",
        year: 2023,
        title: "Conflitos Híbridos e Guerra de Informação",
        description: "Nova era de conflitos caracterizados por guerra cibernética, operações de informação e uso de IA em estratégias militares até 2025.",
        mediaPortrayal: "A cobertura midiática oscila entre alarmismo sobre 'guerras de IA' e ceticismo quanto ao impacto real da tecnologia nos conflitos modernos.",
        propaganda: {
            sides: [
                {
                    name: "Bloco Ocidental",
                    slogans: [
                        "IA pela segurança global",
                        "Tecnologia com responsabilidade"
                    ],
                    mediaOutlets: [
                        "The Guardian",
                        "New York Times",
                        "Wired"
                    ],
                    techniques: [
                        "Alarme sobre ameaças autoritárias",
                        "Exaltação da transparência digital",
                        "Narrativas de proteção de dados"
                    ]
                },
                {
                    name: "Bloco Tecnocrático Autoritário",
                    slogans: [
                        "Soberania Digital",
                        "IA pelo progresso soberano"
                    ],
                    mediaOutlets: [
                        "Global Times",
                        "Sputnik Tech"
                    ],
                    techniques: [
                        "Nacionalismo tecnológico",
                        "Desinformação algorítmica",
                        "Propaganda baseada em deep fakes"
                    ]
                }
            ],
            analysis: "A propaganda em conflitos híbridos envolve IA na produção e disseminação de narrativas, manipulação de redes sociais e criação de conteúdos falsificados (deep fakes), dificultando a distinção entre realidade e ficção."
        },
        theories: [
            {
                title: "Desenvolvimento secreto de IAs militares autônomas",
                description: "Relatos indicam que nações e corporações privadas desenvolveram inteligências artificiais capazes de operar de forma independente em teatros de guerra."
            },
            {
                title: "Manipulação de mercados por IAs",
                description: "Especulações sobre IA sendo usada para criar instabilidade econômica ou manipular algoritmos financeiros globais para benefício estratégico."
            },
            {
                title: "Uso de deep fakes em desestabilização global",
                description: "Teorias sugerem que deep fakes estão sendo utilizados por diversos atores para sabotar reputações, eleições e confiança pública em larga escala."
            }
        ],
        relatedNews: [
            {
                title: "Vazamento de dados massivo afeta sistemas militares globais",
                description: "Uma falha de segurança em 2024 expôs vulnerabilidades em sistemas militares interconectados via IA.",
                source: "CyberDefense Review",
                date: "2024-08-12"
            },
            {
                title: "IA militar autônoma toma decisões sem supervisão humana",
                description: "Relatórios emergem sobre uso de drones e sistemas ofensivos guiados por IA sem controle direto de operadores humanos.",
                source: "DefenseTech",
                date: "2025-01-20"
            },
            {
                title: "Criptomoedas utilizadas para financiar operações secretas",
                description: "Investigações revelam fluxos de criptomoedas sendo usados por atores estatais e privados para financiar ciberataques e operações de influência.",
                source: "Blockchain Intelligence Lab",
                date: "2023-11-02"
            }
        ],
        financialInfo: {
            financialImpact: "O uso de IA e criptomoedas transformou o financiamento de guerras, possibilitando operações secretas, anonimato e fluxos financeiros descentralizados.",
            banks: [
                {
                    name: "Digital Reserve Bank",
                    country: "Desconhecido",
                    owners: [
                        {
                            name: "Consórcio de IA",
                            religion: "N/A"
                        }
                    ]
                },
                {
                    name: "Global Cyber Bank",
                    country: "Desconhecido",
                    owners: [
                        {
                            name: "Tech Consortium",
                            religion: "N/A"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Empresas de tecnologia",
                    type: "organization",
                    side: "Multiple",
                    amount: "Desconhecido",
                    currency: "Criptomoedas / Fiat"
                },
                {
                    name: "Fundos soberanos digitais",
                    type: "organization",
                    side: "Multiple",
                    amount: "Bilhões",
                    currency: "Criptomoedas"
                },
                {
                    name: "Consórcios de IA",
                    type: "organization",
                    side: "Multiple",
                    amount: "Desconhecido",
                    currency: "Multiple"
                },
                {
                    name: "Venture Capital em Defesa",
                    type: "organization",
                    side: "Ocidental",
                    amount: "Bilhões",
                    currency: "US Dollar / Crypto"
                }
            ]
        },
        image: "placeholder.svg"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/EventDetails.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/warEvents.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sword.js [app-client] (ecmascript) <export default as Sword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.js [app-client] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-client] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cross$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cross$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cross.js [app-client] (ecmascript) <export default as Cross>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const EventDetails = ({ event })=>{
    const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"].findIndex((e)=>e.id === event.id);
    const previousEvent = currentIndex > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"][currentIndex - 1] : null;
    const nextEvent = currentIndex < __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"][currentIndex + 1] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-col justify-center mx-auto my-8 px-4 gap-2",
            children: [
                event.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "absolute overflow-hidden w-[100%] md:w-[80%] h-[500px] top-0 p-0 left-[50%] -translate-x-[50%]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: `${event.image}`,
                        alt: "Background",
                        className: "object-cover object-center w-full h-full",
                        priority: true,
                        width: 1920,
                        height: 1080
                    }, void 0, false, {
                        fileName: "[project]/components/EventDetails.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/EventDetails.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: `mx-auto overflow-hidden max-w-6xl flex ${event.image && "mt-100"} shadow-lg p-0 w-full z-10`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "bg-gradient-to-r from-blue-900 to-amber-500 text-white p-5 flex-col h-full items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex  flex-col flex-wrap md:w-1/2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-3xl font-bold ",
                                                children: event.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/EventDetails.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                className: "text-xl text-gray-200",
                                                children: event.year
                                            }, void 0, false, {
                                                fileName: "[project]/components/EventDetails.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/EventDetails.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center md:justify-end gap-4 md:w-1/2",
                                        children: [
                                            previousEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "bg-white text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    prefetch: false,
                                                    href: `/event/${previousEvent.id}`,
                                                    children: "← Anterior"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/EventDetails.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-900 text-white px-6 py-3 rounded-md text-xl font-bold shadow-md",
                                                children: event.year
                                            }, void 0, false, {
                                                fileName: "[project]/components/EventDetails.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            nextEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "bg-white text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    prefetch: false,
                                                    href: `/event/${nextEvent.id}`,
                                                    children: "Próximo →"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/EventDetails.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/EventDetails.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EventDetails.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EventDetails.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-5 space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        previousEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-timeline-cream p-5 rounded-lg border border-timeline-gold shadow-sm hover:shadow-md transition-shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-3 flex items-center text-blue-900",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                                            className: "mr-2 h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Evento Anterior: ",
                                                        previousEvent.year
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-timeline-burgundy mb-2",
                                                    children: previousEvent.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700",
                                                    children: [
                                                        previousEvent.description?.substring(0, 120) ?? "",
                                                        "..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        nextEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-timeline-cream p-5 rounded-lg border border-timeline-gold shadow-sm hover:shadow-md transition-shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-3 flex items-center text-blue-900",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                                            className: "mr-2 h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Evento Posterior: ",
                                                        nextEvent.year
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-timeline-burgundy mb-2",
                                                    children: nextEvent.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700",
                                                    children: [
                                                        nextEvent.description?.substring(0, 120),
                                                        "..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-blue-900 border-b pb-2",
                                            children: "Descrição Histórica"
                                        }, void 0, false, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-5 rounded-lg shadow-inner border",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-800 leading-relaxed",
                                                children: event.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/EventDetails.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                                    className: "mr-2 h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                "Representação na Mídia"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-5 rounded-lg shadow-inner border",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-800 leading-relaxed",
                                                children: event.mediaPortrayal
                                            }, void 0, false, {
                                                fileName: "[project]/components/EventDetails.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                event.propaganda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                                    className: "mr-2 h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this),
                                                "Propaganda e Narrativas"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                event.propaganda.sides.map((side, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-timeline-cream p-5 rounded-lg border border-timeline-gold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xl font-semibold mb-3 text-amber-700",
                                                                children: side.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "font-medium mb-2",
                                                                        children: "Slogans:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EventDetails.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: side.slogans.map((slogan, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "bg-white px-3 py-1 rounded-full text-sm shadow-sm",
                                                                                children: slogan
                                                                            }, i, false, {
                                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                                lineNumber: 185,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EventDetails.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "font-medium mb-2",
                                                                        children: "Veículos de Mídia:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EventDetails.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc pl-5 space-y-1",
                                                                        children: side.mediaOutlets.map((outlet, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: outlet
                                                                            }, i, false, {
                                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                                lineNumber: 199,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EventDetails.tsx",
                                                                        lineNumber: 197,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "font-medium mb-2",
                                                                        children: "Técnicas de Propaganda:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EventDetails.tsx",
                                                                        lineNumber: 205,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc pl-5 space-y-1",
                                                                        children: side.techniques.map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: tech
                                                                            }, i, false, {
                                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                                lineNumber: 210,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EventDetails.tsx",
                                                                        lineNumber: 208,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/components/EventDetails.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-5 rounded-lg border shadow-inner",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold mb-2 text-blue-900",
                                                            children: "Análise da Propaganda:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-800",
                                                            children: event.propaganda.analysis
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__["Sword"], {
                                                    className: "mr-2 h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this),
                                                "Teorias e Conspirações"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: event.theories?.map((theory, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-amber-100 h-fit mansonry p-5 rounded-lg border border-amber-300 hover:shadow-md transition-shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg font-semibold mb-2 text-amber-700",
                                                            children: theory.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 mb-3",
                                                            children: theory.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this),
                                                        theory.evidence && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white p-3 rounded border text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: "Evidência:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                theory.evidence
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cross$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cross$3e$__["Cross"], {
                                                    className: "mr-2 h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 17
                                                }, this),
                                                "Conflitos e Relacionamentos"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        event.masons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: event.masons.map((masons, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: " bg-white p-5 rounded-lg border shadow-sm hover:shadow-md transition-shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold text-blue-900 mb-3",
                                                            children: masons.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 text-sm text-gray-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "Afiliação:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 270,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " ",
                                                                        masons.affiliation
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "Religião:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 274,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " ",
                                                                        masons.religion
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "Posição:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " ",
                                                                        masons.position
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "País:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 282,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " ",
                                                                        masons.country
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: "Período Ativo:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 286,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " ",
                                                                        masons.activeYears.fromYear,
                                                                        " -",
                                                                        " ",
                                                                        masons.activeYears.toYear
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                event.relatedNews && event.relatedNews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                                    className: "mr-2 h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                "Notícias Relacionadas"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: event.relatedNews.map((news, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-5 rounded-lg border shadow-sm hover:shadow-md transition-shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-amber-700 mb-1",
                                                            children: news.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 mb-2",
                                                            children: news.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 23
                                                        }, this),
                                                        news.evidence && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "p-3 border rounded-sm border-amber-300 bg-amber-100",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: "Evidencia:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 316,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " ",
                                                                news.evidence
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-sm text-gray-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Fonte: ",
                                                                        news.source
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 25
                                                                }, this),
                                                                news.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Data: ",
                                                                        news.date
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 39
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this),
                                event.financialInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                    className: "mr-2 h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 19
                                                }, this),
                                                "Suporte Financeiro e Bancário"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-x-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                                        className: "min-w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                                className: "bg-blue-900 text-white",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            className: "text-white",
                                                                            children: "Banco/Instituição"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 342,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            className: "text-white",
                                                                            children: "País"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 345,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            className: "text-white",
                                                                            children: "Ativos"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 346,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            className: "text-white",
                                                                            children: "Proprietários"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 347,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                            className: "text-white",
                                                                            children: "Afiliações"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 350,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                                                children: event.financialInfo?.banks?.map((bank, bankIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                                        children: bank.owners?.map((owner, ownerIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                                children: [
                                                                                    ownerIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                                rowSpan: bank.owners?.length,
                                                                                                className: "font-medium",
                                                                                                children: bank.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                                                lineNumber: 362,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                                rowSpan: bank.owners?.length,
                                                                                                children: bank.country
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                                                lineNumber: 368,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                                rowSpan: bank.owners?.length,
                                                                                                children: bank.assets || "N/A"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                                                lineNumber: 371,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                        children: owner.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/EventDetails.tsx",
                                                                                        lineNumber: 376,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: [
                                                                                                owner.president && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: [
                                                                                                        "Presidente: ",
                                                                                                        owner.president.name,
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                                                            lineNumber: 382,
                                                                                                            columnNumber: 41
                                                                                                        }, this),
                                                                                                        "Religião: ",
                                                                                                        owner.president.religion
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                                                    lineNumber: 380,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                owner.politicalAffiliation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "block",
                                                                                                    children: [
                                                                                                        "Política: ",
                                                                                                        owner.politicalAffiliation
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                                                    lineNumber: 388,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                                            lineNumber: 378,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/EventDetails.tsx",
                                                                                        lineNumber: 377,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, `${bankIndex}-${ownerIndex}`, true, {
                                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                                lineNumber: 359,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, bankIndex, false, {
                                                                        fileName: "[project]/components/EventDetails.tsx",
                                                                        lineNumber: 357,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/EventDetails.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-amber-100 p-5 rounded-lg border border-amber-300 min-h-32 h-fit max-h-[100%]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-lg mb-3 text-amber-700",
                                                                    children: "Principais Financiadores:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-3",
                                                                    children: event.financialInfo.financiers?.map((financier, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                                                    className: "mt-1 mr-3 h-5 w-5 text-amber-700 flex-shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                                    lineNumber: 411,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-medium",
                                                                                            children: financier.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                                            lineNumber: 413,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-sm text-gray-600",
                                                                                            children: [
                                                                                                "Tipo: ",
                                                                                                financier.type,
                                                                                                " • Regilião:",
                                                                                                " ",
                                                                                                financier.religion,
                                                                                                financier.amount && ` Montante: ${financier.amount} ${financier.currency || ""}`
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                                            lineNumber: 416,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                                    lineNumber: 412,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "[project]/components/EventDetails.tsx",
                                                                            lineNumber: 410,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white p-5 rounded-lg border shadow-inner",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-lg mb-3 text-blue-900",
                                                                    children: "Impacto Financeiro:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 432,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-800",
                                                                    children: event.financialInfo.financialImpact
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 331,
                                    columnNumber: 15
                                }, this),
                                event.casualties && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cross$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cross$3e$__["Cross"], {
                                                    className: "mr-2 h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this),
                                                "Baixas e Consequências Humanas"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-amber-100 p-5 rounded-lg border border-amber-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                children: [
                                                    event.casualties.military && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-bold text-amber-700",
                                                                children: event.casualties.military
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm uppercase tracking-wider",
                                                                children: "Baixas Militares"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 458,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/EventDetails.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 23
                                                    }, this),
                                                    event.casualties.civilian && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-bold text-amber-700",
                                                                children: event.casualties.civilian
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm uppercase tracking-wider",
                                                                children: "Vítimas Civis"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/EventDetails.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 23
                                                    }, this),
                                                    event.casualties.total && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-bold text-amber-700",
                                                                children: event.casualties.total
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm uppercase tracking-wider",
                                                                children: "Total Estimado"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EventDetails.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/EventDetails.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/EventDetails.tsx",
                                                lineNumber: 452,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this),
                                event.keyFigures && event.keyFigures.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "mr-2 h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 19
                                                }, this),
                                                "Figuras-Chave"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 491,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                            children: event.keyFigures.map((figure, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-lg text-rose-800 mb-1",
                                                            children: figure.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-600 mb-2",
                                                            children: figure.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-amber-100 px-2 py-1 rounded",
                                                                    children: [
                                                                        "Lado: ",
                                                                        figure.side
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 25
                                                                }, this),
                                                                figure.fate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-500",
                                                                    children: [
                                                                        "Destino: ",
                                                                        figure.fate
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EventDetails.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EventDetails.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/components/EventDetails.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/EventDetails.tsx",
                                            lineNumber: 495,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EventDetails.tsx",
                                    lineNumber: 490,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EventDetails.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EventDetails.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/EventDetails.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/EventDetails.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_c = EventDetails;
const __TURBOPACK__default__export__ = EventDetails;
var _c;
__turbopack_context__.k.register(_c, "EventDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-timeline-navy text-white p-6 mt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 md:mb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-300",
                            children: "© 2025 CronoGuerra - Uma linha do tempo histórica sobre guerras e conflitos"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-gray-300 hover:text-timeline-gold transition-colors",
                                children: "Termos de Uso"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-gray-300 hover:text-timeline-gold transition-colors",
                                children: "Política de Privacidade"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-gray-300 hover:text-timeline-gold transition-colors",
                                children: "Contato"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/event/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EventDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/warEvents.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const EventPage = ()=>{
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const event = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"].find((e)=>e.id === id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventPage.useEffect": ()=>{
            if (!event) {
                navigate.push("/");
            }
        }
    }["EventPage.useEffect"], [
        event,
        navigate
    ]);
    if (!event) return null;
    const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"].findIndex((e)=>e.id === id);
    const prevEvent = currentIndex > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"][currentIndex - 1] : null;
    const nextEvent = currentIndex < __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"][currentIndex + 1] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/event/[id]/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto mt-6 px-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center text-timeline-navy hover:text-timeline-burgundy transition-colors mb-6",
                            children: "← Voltar para a Linha do Tempo"
                        }, void 0, false, {
                            fileName: "[project]/app/event/[id]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EventDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            event: event
                        }, void 0, false, {
                            fileName: "[project]/app/event/[id]/page.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center md:justify-between max-w-4xl gap-2 mx-auto px-4 my-8 w-full items-center",
                            children: [
                                prevEvent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "border border-blue-900 bg-transparent text-blue-900 hover:bg-blue-900 hover:text-white",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "flex items-center",
                                        href: `/event/${prevEvent.id}`,
                                        children: [
                                            "← ",
                                            prevEvent.title,
                                            " (",
                                            prevEvent.year,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/event/[id]/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/event/[id]/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/app/event/[id]/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                nextEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "border border-blue-900 bg-transparent text-blue-900 hover:bg-blue-900 hover:text-white",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "flex items-center",
                                        href: `/event/${nextEvent.id}`,
                                        children: [
                                            nextEvent.title,
                                            " (",
                                            nextEvent.year,
                                            ") →"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/event/[id]/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/event/[id]/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/event/[id]/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/event/[id]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/event/[id]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/event/[id]/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/event/[id]/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(EventPage, "bnNVgTTHAwoB1Npmw4Rv9RwuvUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EventPage;
const __TURBOPACK__default__export__ = EventPage;
var _c;
__turbopack_context__.k.register(_c, "EventPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_6b97a4bb._.js.map