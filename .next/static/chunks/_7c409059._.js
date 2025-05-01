(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
(()=>{
    const e = new Error("Cannot find module 'clsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'tailwind-merge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
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
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/TimelineEvent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-router-dom'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
const TimelineEvent = ({ event, position, isActive, onClick, isMobile })=>{
    // Determine if we should render the event dot only or the full card
    const renderDotOnly = !isActive && isMobile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute transition-all duration-300 cursor-pointer ${isActive ? "z-50" : "z-10"}`,
        style: {
            left: position,
            transform: "translateX(-50%)",
            top: isActive ? "50%" : "60%"
        },
        onClick: onClick,
        children: [
            !renderDotOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: isActive ? 1 : 0.7,
                    y: 0,
                    scale: isActive ? 1 : 0.95
                },
                transition: {
                    duration: 0.3
                },
                className: "w-64 max-w-[calc(100vw-40px)] mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: `shadow-lg transition-all duration-300 ${isActive ? "border-timeline-burgundy border-2 z-50" : "border-gray-200"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "p-3 bg-timeline-navy text-white rounded-t-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: event.title
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineEvent.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    className: "text-gray-300 text-xs",
                                    children: event.year
                                }, void 0, false, {
                                    fileName: "[project]/components/TimelineEvent.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TimelineEvent.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-3 pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm line-clamp-2",
                                children: event.description
                            }, void 0, false, {
                                fileName: "[project]/components/TimelineEvent.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TimelineEvent.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                            className: "p-3 pt-0 flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                to: `/evento/${event.id}`,
                                className: "text-xs text-timeline-navy font-medium hover:text-timeline-burgundy transition-colors",
                                onClick: (e)=>e.stopPropagation(),
                                children: "Ver detalhes →"
                            }, void 0, false, {
                                fileName: "[project]/components/TimelineEvent.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TimelineEvent.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TimelineEvent.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TimelineEvent.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-12 w-0.5 mx-auto mb-1 transition-all duration-300 ${isActive ? "bg-timeline-burgundy " : "bg-timeline-navy"}`
            }, void 0, false, {
                fileName: "[project]/components/TimelineEvent.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-4 w-4 rounded-full mx-auto transition-all duration-300 ${isActive ? "bg-timeline-burgundy scale-125" : "bg-timeline-navy scale-100 hover:scale-110"}`
            }, void 0, false, {
                fileName: "[project]/components/TimelineEvent.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TimelineEvent.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
_c = TimelineEvent;
const __TURBOPACK__default__export__ = TimelineEvent;
var _c;
__turbopack_context__.k.register(_c, "TimelineEvent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/tooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-tooltip'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipPrimitive.Content, {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this));
_c1 = TooltipContent;
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "TooltipContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/TimelinePeriod.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tooltip.tsx [app-client] (ecmascript)");
"use client";
;
;
const TimelinePeriod = ({ period, width, position, isActive, onClick, isMobile })=>{
    const periodContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-xs text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-medium",
                children: period.name
            }, void 0, false, {
                fileName: "[project]/components/TimelinePeriod.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] opacity-80",
                children: [
                    period.startYear,
                    " - ",
                    period.endYear
                ]
            }, void 0, true, {
                fileName: "[project]/components/TimelinePeriod.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TimelinePeriod.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute cursor-pointer transition-all duration-300 ${isActive ? "h-10 -top-1 z-20" : "h-8 top-0 z-10 hover:h-9 hover:-top-0.5"}`,
        style: {
            width,
            left: position,
            backgroundColor: period.color,
            opacity: isActive ? 1 : 0.8,
            borderRadius: "4px"
        },
        onClick: onClick,
        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/components/TimelinePeriod.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TimelinePeriod.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                        children: periodContent
                    }, void 0, false, {
                        fileName: "[project]/components/TimelinePeriod.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TimelinePeriod.tsx",
                lineNumber: 42,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/TimelinePeriod.tsx",
            lineNumber: 41,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `absolute w-full text-white font-medium text-center ${isActive ? "-top-8" : "-top-7"}`,
            children: periodContent
        }, void 0, false, {
            fileName: "[project]/components/TimelinePeriod.tsx",
            lineNumber: 50,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TimelinePeriod.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_c = TimelinePeriod;
const __TURBOPACK__default__export__ = TimelinePeriod;
var _c;
__turbopack_context__.k.register(_c, "TimelinePeriod");
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
        image: "placeholder.svg",
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
                        "Exaltação do progresso britânico"
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
                        "Propaganda anti-britânica"
                    ]
                }
            ],
            analysis: "A propaganda foi usada para justificar a guerra em múltiplos teatros, com panfletos e jornais moldando a opinião pública."
        },
        theories: [
            {
                title: "Revolução Militar",
                description: "Novas táticas e tecnologias testadas durante este conflito revolucionaram a forma como as guerras seriam travadas posteriormente."
            },
            {
                title: "Domínio Britânico Global",
                description: "Esta guerra estabeleceu as fundações para o posterior domínio britânico global."
            },
            {
                title: "Conspiração Diplomática",
                description: "Prússia e Grã-Bretanha planejaram deliberadamente provocar o conflito para redistribuir o poder na Europa."
            },
            {
                title: "Influência Maçônica",
                description: "A influência maçônica na formação das alianças, especialmente considerando a ligação de Federico II da Prússia com a maçonaria."
            }
        ],
        image: "placeholder.svg",
        relatedNews: [
            {
                title: "Tratado de Paris (1763) estabelece nova ordem colonial global",
                description: "O tratado de paz que encerrou a Guerra dos Sete Anos redefiniu as fronteiras coloniais globais",
                source: "Arquivos Históricos",
                date: "1763-02-10"
            },
            {
                title: "Prússia emerge como potência militar europeia após vitórias decisivas",
                description: "Após uma série de batalhas cruciais, a Prússia estabeleceu-se como uma das principais forças militares da Europa",
                source: "Registros Militares Prussianos",
                date: "1763"
            },
            {
                title: "French war debts contribute to later French Revolution",
                description: "The massive debts incurred during the war significantly weakened French finances, contributing to the economic crisis that helped spark the French Revolution",
                source: "Historical Financial Records",
                date: "1763"
            },
            {
                title: "Massacre de Jumonville Glen marca início das hostilidades na América do Norte",
                description: "O confronto entre forças francesas e britânicas em Jumonville Glen iniciou formalmente as hostilidades na América do Norte",
                source: "Registros Históricos Coloniais",
                date: "1754-05-28"
            }
        ],
        financialInfo: {
            financialImpact: "The Seven Years' War had major financial consequences including massive war debts for European powers, particularly France and Britain. This led to increased taxation and financial instability in the following decades.",
            banks: [
                {
                    name: "Bank of England",
                    country: "England",
                    owners: [
                        {
                            name: "William Barrington",
                            religion: "Protestant"
                        },
                        {
                            name: "George Grenville",
                            religion: "Anglican"
                        }
                    ]
                },
                {
                    name: "Preußische Bank",
                    country: "Prussia",
                    owners: [
                        {
                            name: "Johann Ernst Gotzkowsky",
                            religion: "Protestant"
                        }
                    ]
                },
                {
                    name: "Banque Royale de France",
                    country: "France",
                    owners: [
                        {
                            name: "Étienne de Silhouette",
                            religion: "Catholic"
                        },
                        {
                            name: "Henri Bertin",
                            religion: "Catholic"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Casa Rothschild",
                    type: "organization",
                    side: "Multiple",
                    amount: "Unknown",
                    currency: "Multiple"
                },
                {
                    name: "Banqueiros Judeus de Amsterdam",
                    type: "organization",
                    side: "Multiple",
                    amount: "Unknown",
                    currency: "Dutch Guilder"
                },
                {
                    name: "East India Company",
                    type: "organization",
                    side: "Great Britain",
                    amount: "Unknown",
                    currency: "British Pound"
                },
                {
                    name: "Compagnie des Indes",
                    type: "corporation",
                    side: "France",
                    amount: "Unknown",
                    currency: "French Livre"
                }
            ]
        }
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
                description: "Os Fundadores dos EUA, muitos deles maçons, planejaram a revolução como parte de um plano maior."
            },
            {
                title: "Financiamento Europeu",
                description: "Banqueiros europeus financiaram a revolução para enfraquecer o domínio britânico."
            },
            {
                title: "Rothschild financiando ambos os lados",
                description: "A Casa de Rothschild lucrou com a guerra financiando ambos os lados do conflito."
            }
        ],
        image: "placeholder.svg",
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
            }
        ],
        financialInfo: {
            financialImpact: "The American Revolution had major financial consequences including the establishment of new banking systems and currency in the United States",
            banks: [
                {
                    name: "Bank of North America",
                    country: "United States",
                    owners: [
                        {
                            name: "Robert Morris",
                            religion: "Protestant"
                        },
                        {
                            name: "Thomas Willing",
                            religion: "Quaker"
                        }
                    ]
                },
                {
                    name: "Bank of England",
                    country: "England",
                    owners: [
                        {
                            name: "Sir Richard Neave",
                            religion: "Anglican"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Casa Rothschild",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Multiple"
                },
                {
                    name: "Banqueiros holandeses",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Dutch Guilder"
                },
                {
                    name: "Mercadores franceses",
                    type: "organization",
                    side: "France",
                    amount: "Unknown",
                    currency: "French Livre"
                },
                {
                    name: "Haym Solomon",
                    type: "individual",
                    side: "United States",
                    amount: "Unknown",
                    currency: "Continental Dollar"
                }
            ]
        }
    },
    {
        id: "french-revolution",
        year: 1789,
        title: "Revolução Francesa",
        description: "Período revolucionário que transformou a França de uma monarquia absoluta em uma república, com profundas implicações para toda a Europa.",
        mediaPortrayal: "A cobertura histórica tende a focar na violência e no Terror, frequentemente negligenciando as complexas manobras financeiras e políticas nos bastidores.",
        propaganda: {
            sides: [
                {
                    name: "Revolucionários",
                    slogans: [
                        "Liberté, égalité, fraternité",
                        "Abaixo a tirania!"
                    ],
                    mediaOutlets: [
                        "Le Moniteur Universel"
                    ],
                    techniques: [
                        "Apelo à igualdade",
                        "Demonização da aristocracia"
                    ]
                },
                {
                    name: "Monarquistas",
                    slogans: [
                        "Ordem e tradição",
                        "Pela coroa"
                    ],
                    mediaOutlets: [
                        "Gazette de France"
                    ],
                    techniques: [
                        "Medo do caos",
                        "Apelo à estabilidade"
                    ]
                }
            ],
            analysis: "A propaganda revolucionária foi essencial para mobilizar as massas, enquanto os monarquistas tentavam preservar a ordem estabelecida."
        },
        theories: [
            {
                title: "Conspiração Iluminati",
                description: "Sociedades secretas orquestraram a revolução para derrubar as monarquias europeias."
            },
            {
                title: "Crise Financeira Artificial",
                description: "A crise financeira foi deliberadamente criada por banqueiros para provocar a revolução."
            },
            {
                title: "Maçons e o Levante Popular",
                description: "O papel dos maçons na organização do levante popular."
            }
        ],
        image: "placeholder.svg",
        relatedNews: [
            {
                title: "Morte misteriosa de importantes figuras aristocráticas durante o Terror",
                description: "Diversos membros da aristocracia francesa morreram em circunstâncias suspeitas durante o período do Terror",
                source: "Registros Históricos Franceses",
                date: "1793-1794"
            },
            {
                title: "Conexões entre revolucionários e banqueiros suíços reveladas",
                description: "Novos documentos históricos mostram ligações financeiras entre líderes revolucionários e instituições bancárias suíças",
                source: "Arquivos Históricos Nacionais",
                date: "1776"
            },
            {
                title: "Papel dos assignats na desestabilização econômica",
                description: "Documentos históricos revelam a influência dos assignats na desestabilização econômica da França",
                source: "Arquivos Históricos Nacionais",
                date: "1776"
            }
        ],
        financialInfo: {
            financialImpact: "The French Revolution had major financial consequences including the establishment of new banking systems and currency in the United States",
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
                    name: "Mercadores franceses",
                    type: "organization",
                    side: "France",
                    amount: "Unknown",
                    currency: "French Livre"
                },
                {
                    name: "Banqueiros suíços",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Swiss Franc"
                },
                {
                    name: "Casa Rothschild",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Multiple"
                },
                {
                    name: "Banqueiros holandeses",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Dutch Guilder"
                }
            ]
        }
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
                description: "Especulações sobre acordos secretos entre Napoleão e banqueiros europeus."
            },
            {
                title: "Manipulação do Ouro",
                description: "Manipulação do mercado de ouro durante as guerras."
            }
        ],
        image: "placeholder.svg",
        relatedNews: [
            {
                title: "Mortes suspeitas de generais franceses durante a campanha da Rússia",
                description: "Diversas mortes suspeitas de generais franceses durante a campanha da Rússia",
                source: "Registros Históricos Franceses",
                date: "1803-1804"
            },
            {
                title: "Conexões financeiras entre Napoleão e banqueiros internacionais reveladas",
                description: "Novos documentos históricos mostram ligações financeiras entre Napoleão e instituições bancárias internacionais",
                source: "Arquivos Históricos Nacionais",
                date: "1776"
            },
            {
                title: "Papel do Banco da Inglaterra no financiamento da coalizão anti-francesa",
                description: "Documentos históricos revelam a influência do Banco da Inglaterra na estruturação da coalizão anti-francesa",
                source: "Arquivos Históricos Nacionais",
                date: "1776"
            }
        ],
        financialInfo: {
            financialImpact: "The Napoleonic Wars had major financial consequences including the establishment of new banking systems and currency in the United States",
            banks: [
                {
                    name: "Banque de France",
                    country: "France",
                    owners: [
                        {
                            name: "Napoleon Bonaparte",
                            religion: "Catholic"
                        },
                        {
                            name: "Martin-Michel-Charles Gaudin",
                            religion: "Catholic"
                        }
                    ]
                },
                {
                    name: "Bank of England",
                    country: "England",
                    owners: [
                        {
                            name: "Henry Thornton",
                            religion: "Protestant"
                        }
                    ]
                }
            ],
            financiers: [
                {
                    name: "Nathan Rothschild",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Multiple"
                },
                {
                    name: "Ouvrard Banking House",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Swiss Franc"
                },
                {
                    name: "Hope & Co. Amsterdam",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "Dutch Guilder"
                },
                {
                    name: "Baring Brothers",
                    type: "organization",
                    side: "Both",
                    amount: "Unknown",
                    currency: "British Pound"
                }
            ]
        }
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
        image: "placeholder.svg",
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
        image: "placeholder.svg"
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
        image: "placeholder.svg"
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
        image: "placeholder.svg",
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
        image: "placeholder.svg"
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
        image: "placeholder.svg",
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
        image: "placeholder.svg",
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
        image: "placeholder.svg"
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
            analysis: `A propaganda foi essencial para a mobilização civil e militar em ambos os lados, com intensa manipulação emocional e racial. Os judeus eram acusados de coisas como roubar ao povo alemão o seu trabalho árduo e de, em simultâneo, evitar o trabalho físico. Hitler declarou que a missão do movimento nazi era aniquilar o 'bolchevismo judeu', que também era chamado de 'bolchevismo cultural'.[7] Hitler afirmou que os 'três vícios' do 'marxismo judaico' eram a democracia, o pacifismo e o internacionalismo,[8] e que os judeus eram responsáveis pelo bolchevismo, comunismo e marxismo.[9] Joseph Goebbels em 1937 A Grande Exposição Anti-Bolchevista declarou que o bolchevismo e os judeus eram uma e a mesma coisa.[10] Source:"https://pt.wikipedia.org/wiki/Propaganda_nazista"}`
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
        image: "placeholder.svg",
        relatedNews: [
            {
                title: "Holocausto e libertação dos campos",
                description: "Divulgação global das atrocidades cometidas pelos nazistas após a libertação dos campos de concentração.",
                source: "The Times",
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
        image: "placeholder.svg",
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
        image: "placeholder.svg",
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
        image: "placeholder.svg",
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
        image: "placeholder.svg",
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
                            religion: "Agnóstico"
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
        image: "placeholder.svg",
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
        image: "placeholder.svg",
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
                            religion: "Agnóstico"
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
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-slot'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'class-variance-authority'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? Slot : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Timeline.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TimelineEvent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TimelineEvent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TimelinePeriod$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TimelinePeriod.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/warEvents.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/hooks/use-mobile'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
const Timeline = ()=>{
    _s();
    const [activePeriodId, setActivePeriodId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timePeriods"][0].id);
    const [activeEventId, setActiveEventId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"][0].id);
    const [centerPosition, setCenterPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = useIsMobile();
    // Sort events chronologically
    const sortedEvents = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warEvents"]
    ].sort((a, b)=>a.year - b.year);
    const startYear = 1700;
    const endYear = 2025;
    const totalYears = endYear - startYear;
    // Calculate positions and widths
    const getEventPosition = (year)=>{
        return `${(year - startYear) / totalYears * 100}%`;
    };
    const getPeriodWidth = (startYear, endYear)=>{
        return `${(endYear - startYear) / totalYears * 100}%`;
    };
    const getPeriodPosition = (startYear)=>{
        return `${(startYear - 1700) / totalYears * 100}%`;
    };
    // Handle event navigation
    const handleScrollToEvent = (eventId)=>{
        const event = sortedEvents.find((e)=>e.id === eventId);
        if (event) {
            const position = (event.year - startYear) / totalYears;
            setCenterPosition(position);
            setActiveEventId(eventId);
            // Update active period based on event year
            for (const period of __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timePeriods"]){
                if (event.year >= period.startYear && event.year <= period.endYear) {
                    setActivePeriodId(period.id);
                    break;
                }
            }
        }
    };
    // Handle period selection
    const handlePeriodClick = (periodId)=>{
        setActivePeriodId(periodId);
        const period = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timePeriods"].find((p)=>p.id === periodId);
        if (period) {
            const middleYear = (period.startYear + period.endYear) / 2;
            const position = (middleYear - startYear) / totalYears;
            setCenterPosition(position);
            // Find an event close to the middle of the period
            const eventsInPeriod = sortedEvents.filter((e)=>e.year >= period.startYear && e.year <= period.endYear);
            if (eventsInPeriod.length > 0) {
                const middleEvent = eventsInPeriod.reduce((prev, curr)=>{
                    return Math.abs(curr.year - middleYear) < Math.abs(prev.year - middleYear) ? curr : prev;
                });
                setActiveEventId(middleEvent.id);
            }
        }
    };
    // Handle timeline click
    const handleTimelineClick = (e)=>{
        if (!timelineRef.current) return;
        const rect = timelineRef.current.getBoundingClientRect();
        const clickPosition = (e.clientX - rect.left) / rect.width;
        const clickedYear = Math.round(clickPosition * totalYears + startYear);
        // Find the closest event to the clicked year
        const closestEvent = sortedEvents.reduce((prev, curr)=>{
            return Math.abs(curr.year - clickedYear) < Math.abs(prev.year - clickedYear) ? curr : prev;
        });
        setCenterPosition(clickPosition);
        setActiveEventId(closestEvent.id);
        updateActivePeriod(clickedYear);
    };
    // Update active period based on year
    const updateActivePeriod = (year)=>{
        for (const period of __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timePeriods"]){
            if (year >= period.startYear && year <= period.endYear) {
                setActivePeriodId(period.id);
                break;
            }
        }
    };
    // Navigation handlers
    const handleNext = ()=>{
        const currentIndex = sortedEvents.findIndex((e)=>e.id === activeEventId);
        if (currentIndex < sortedEvents.length - 1) {
            handleScrollToEvent(sortedEvents[currentIndex + 1].id);
        }
    };
    const handlePrevious = ()=>{
        const currentIndex = sortedEvents.findIndex((e)=>e.id === activeEventId);
        if (currentIndex > 0) {
            handleScrollToEvent(sortedEvents[currentIndex - 1].id);
        }
    };
    // Update timeline position when centerPosition changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timeline.useEffect": ()=>{
            if (timelineRef.current && containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const timelineWidth = containerWidth * 5 // Make timeline 5x container width for smooth scrolling
                ;
                const targetPosition = centerPosition * timelineWidth - containerWidth / 2;
                timelineRef.current.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
                timelineRef.current.style.transform = `translateX(-${targetPosition}px)`;
            }
        }
    }["Timeline.useEffect"], [
        centerPosition
    ]);
    // Get active event
    const activeEvent = sortedEvents.find((e)=>e.id === activeEventId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full my-8 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-center mb-6 text-timeline-navy",
                children: "Linha do Tempo Histórica"
            }, void 0, false, {
                fileName: "[project]/components/Timeline.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex justify-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: handlePrevious,
                        disabled: sortedEvents.findIndex((e)=>e.id === activeEventId) === 0,
                        className: "border-timeline-navy text-timeline-navy hover:bg-timeline-navy hover:text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeft, {
                                className: "mr-1 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            "Anterior"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: handleNext,
                        disabled: sortedEvents.findIndex((e)=>e.id === activeEventId) === sortedEvents.length - 1,
                        className: "border-timeline-navy text-timeline-navy hover:bg-timeline-navy hover:text-white",
                        children: [
                            "Próximo",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                                className: "ml-1 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Timeline.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            activeEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block bg-timeline-navy text-white px-3 py-1 rounded-full text-sm font-medium",
                        children: activeEvent.year
                    }, void 0, false, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mt-1",
                        children: activeEvent.title
                    }, void 0, false, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Timeline.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative overflow-hidden w-full h-[400px] md:h-[450px] border border-gray-200 rounded-lg shadow-sm bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: timelineRef,
                    className: "absolute h-full transition-transform duration-500 ease-out",
                    style: {
                        width: "500%",
                        transformOrigin: "left center"
                    },
                    onClick: handleTimelineClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-full h-2 bg-gray-200 top-1/2 transform -translate-y-1/2 z-0"
                        }, void 0, false, {
                            fileName: "[project]/components/Timeline.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-full top-1/2 transform translate-y-4 z-10",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$warEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timePeriods"].map((period)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TimelinePeriod$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    period: period,
                                    width: getPeriodWidth(period.startYear, period.endYear),
                                    position: getPeriodPosition(period.startYear),
                                    isActive: period.id === activePeriodId,
                                    onClick: ()=>handlePeriodClick(period.id),
                                    isMobile: isMobile
                                }, period.id, false, {
                                    fileName: "[project]/components/Timeline.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Timeline.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-full top-0 pt-4 z-30",
                            children: sortedEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TimelineEvent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    event: event,
                                    position: getEventPosition(event.year),
                                    isActive: event.id === activeEventId,
                                    onClick: ()=>handleScrollToEvent(event.id),
                                    isMobile: isMobile
                                }, event.id, false, {
                                    fileName: "[project]/components/Timeline.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Timeline.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-1 h-full bg-timeline-burgundy top-0 z-20",
                            style: {
                                left: activeEvent ? getEventPosition(activeEvent.year) : "0%"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-6 left-1/2 transform -translate-x-1/2 bg-timeline-burgundy text-white px-2 py-1 rounded-full text-sm font-bold",
                                children: activeEvent?.year || startYear
                            }, void 0, false, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Timeline.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Timeline.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Timeline.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm text-gray-500 px-2 mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: startYear
                    }, void 0, false, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: endYear
                    }, void 0, false, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Timeline.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Timeline.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
};
_s(Timeline, "xlMngqU/dT+wcLvmwj34ckFndRM=", false, function() {
    return [
        useIsMobile
    ];
});
_c = Timeline;
const __TURBOPACK__default__export__ = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_7c409059._.js.map