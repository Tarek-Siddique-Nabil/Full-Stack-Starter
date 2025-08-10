# Motion documentation for LLMs

## React (prev Framer Motion)

### Get started
- [Get started with Motion for React](/docs/react-quick-start.md): Get started with Motion for React with our installation guide and interactive examples.

### Animations
- [Gestures](/docs/react-gestures.md): Learn how to use Motion for React's powerful gesture system to trigger animations and events.
- [Layout animations](/docs/react-layout-animations.md): Learn how to create layout and shared layout animations with Motion for React.
- [React animation](/docs/react-animation.md): Learn how to animate with Motion for React. Discover springs, exit animations, layout animations, scroll animations and more.
- [Scroll animations](/docs/react-scroll-animations.md): Learn how to create scroll-linked and scroll-triggered animations in React with Motion.
- [Transitions](/docs/react-transitions.md): A transition defines how values animate from one state to another. Learn how to configure transitions in Motion for React, with durations, cubic bezier curves, springs and more.

### Components
- [AnimatePresence](/docs/react-animate-presence.md): Learn how to quickly make exit animations with Motion for React's AnimatePresence component.
- [LayoutGroup](/docs/react-layout-group.md): Animate layout across component groups with the LayoutGroup component.
- [LazyMotion](/docs/react-lazy-motion.md): Reduce the bundlesize of Motion for React by lazy-loading functionality with the LazyMotion component.
- [motion](/docs/react-motion-component.md): The motion component is a DOM element supercharged with 120fps animations and gestures.
- [MotionConfig](/docs/react-motion-config.md): Learn how use the MotionConfig component to set a default transition for all components, define reduced motion settings, or set a security policy.
- [Reorder](/docs/react-reorder.md): Learn how to create simple drag-to-reorder effects with Motion for React's Reorder components.

### Motion Values
- [Motion values overview](/docs/react-motion-value.md): Learn how to use Motion's motion values, a performant way to track state and velocity.
- [useMotionTemplate](/docs/react-use-motion-template.md): Combine multiple motion values with a string template.
- [useMotionValueEvent](/docs/react-use-motion-value-event.md): Subscribe to motion value events from a React component.
- [useScroll](/docs/react-use-scroll.md): Learn how to create scroll-linked animations with Motion's simple yet powerful useScroll hook.
- [useSpring](/docs/react-use-spring.md): useSpring creates a motion value that animates to its target with a spring.
- [useTime](/docs/react-use-time.md): A motion value that updates every animation frame with the duration, in milliseconds, since it was created.
- [useTransform](/docs/react-use-transform.md): useTransform creates a new motion value that transforms the output of one or more motion values.
- [useVelocity](/docs/react-use-velocity.md): Create a motion value that tracks the velocity of another motion value.

### Hooks
- [useAnimate](/docs/react-use-animate.md): Create an animate function with animation controls, timelines, scoped selectors and automatic cleanup.
- [useAnimationFrame](/docs/react-use-animation-frame.md): Create an animation loop that runs a callback every frame.
- [useDragControls](/docs/react-use-drag-controls.md): Learn how to manually start/stop dragging a motion component with the useDragControls hook.
- [useInView](/docs/react-use-in-view.md): A simple state hook for detecting when an element is within the viewport.
- [useReducedMotion](/docs/react-use-reduced-motion.md): A hook that determines whether the user prefers reduced motion.

### Integrations
- [Framer](/docs/framer.md): Motion for React is already installed in your Framer project. Learn how to use it in your code components and overrides with this simple guide.
- [Integrate Motion with Radix](/docs/radix.md): Learn how to animate Radix components with Motion for React. Easily add layout, exit and spring animations to your Radix components. With live code examples for Tabs, Tooltip and more.

### Guides
- [Accessibility](/docs/react-accessibility.md): How to design accessible animations with Motion for React.
- [Reduce bundle size](/docs/react-reduce-bundle-size.md): Learn what makes up Motion's bundle size, and how to reduce it.
- [Upgrade guide](/docs/react-upgrade-guide.md): How to upgrade to the latest version of Motion for React.

### 3D
- [Layout cameras](/docs/react-three-fiber-layout-cameras.md): A perspective and orthographic camera that integrates with Framer Motion's layout animations.
- [Motion for React Three Fiber](/docs/react-three-fiber.md): Learn how to use Motion for React with React Three Fiber.
- [MotionCanvas](/docs/react-three-fiber-motion-canvas.md): A React Three Fiber Canvas replacement for linking Motion for React DOM and Three.js.


## JavaScript

### Get started
- [Get started with Motion](/docs/quick-start.md): Learn how to install Motion and create your first animation. Motion can animate anything and is the only animation library capable of hardware accelerated animations.

### Animations
- [animate](/docs/animate.md): Learn how to use Motion's animate() function. Animate an element to a target using hardware accelerated animations.
- [Easing functions](/docs/easing-functions.md): Easing functions change the speed of an animation throughout the course of its duration. Learn which ones are included with Motion and how to use them.
- [scroll](/docs/scroll.md): Learn how to create parallax and scroll-linked animations with Motion's scroll() function. It's backwards-compatible with all browsers but also uses ScrollTimeline where possible for hardware accelerated animations.

### Gestures
- [hover](/docs/hover.md): Learn how to create true hover gestures with Motion's hover function. It filters out touch events to fix "stuck" UIs and other broken behaviour.
- [inView](/docs/inview.md): Detect when an element enters or leaves the viewport using Motion's browser-native inView() function.
- [press](/docs/press.md): Learn how to create press gestures with Motion's press() function. Its simple API lets you respond to press start, end and cancel gestures, automatically filtering secondary mouse/touch events and adding keyboard accessibility by default.

### Motion Values
- [motionValue](/docs/motion-value.md): Learn how to use Motion Values, a performant way to track the state and velocity of animated values.

### Integrations
- [CSS](/docs/css.md): Learn how to make spring animations purely in CSS with Motion's spring function.
- [Integrate Motion with Webflow](/docs/webflow.md): Learn how to install Motion in your Webflow project for amazing animation performance and improved SEO.

### Guides
- [FAQs](/docs/faqs.md): Frequently asked questions about Motion.
- [Feature comparison](/docs/feature-comparison.md): Compare the bundle size and feature set of Motion and GSAP.
- [Improvements to Web Animations API](/docs/improvements-to-the-web-animations-api-dx.md): Motion adds a number of features that improve the developer experience of the Web Animations API, and patches up some cross-browser inconsistencies.
- [Migrate from GSAP to Motion](/docs/migrate-from-gsap-to-motion.md): Learn how to improve performance and SEO by migrating your animations from GSAP to Motion.
- [Performance](/docs/performance.md): What makes an animation perform well? Perform poorly? Get the most performance from your web animations with Motion.
- [Upgrade guide](/docs/upgrade-guide.md): How to upgrade to the latest version of Motion.

### Utils
- [delay](/docs/delay.md): A delay function locked to the animation frame loop.
- [frame](/docs/frame.md): Learn about Motion's powerful high-performance animation loop and how to use it to batch reads and writes per animation frame.
- [mix](/docs/mix.md): Learn how to mix two numbers, colors, complex strings, arrays and objects using Motion's powerful mix function.
- [spring](/docs/spring.md): Learn how to use Motion's spring generator to create physics-based animations.
- [stagger](/docs/stagger.md): Learn how to stagger animations across elements with Motion's stagger function.
- [transform](/docs/transform.md): Learn how to transform and map values from one range into another with Motion's powerful transform function.
- [wrap](/docs/wrap.md): Learn how to wrap numbers within a range. This is perfect for looping through a range infinitely. 


## Vue

### Get started
- [Get started with Motion for Vue](/docs/vue.md): Get started with Motion for Vue with our installation guide and interactive examples.

### Animations
- [Animation](/docs/vue-animation.md): Learn how to animate with Motion for Vue. Discover springs, exit animations, layout animations, scroll animations and more.
- [Gestures](/docs/vue-gestures.md): Learn how to use Motion for Vue's powerful gesture system to trigger animations and events.
- [Layout animations](/docs/vue-layout-animations.md): Learn how to create layout and shared layout animations with Motion for Vue.
- [Scroll animations](/docs/vue-scroll-animations.md): Learn how to create scroll-linked and scroll-triggered animations with Motion for Vue.
- [Transitions](/docs/vue-transitions.md): A transition defines how values animate from one state to another. Learn how to configure transitions in Motion for Vue, with durations, cubic bezier curves, springs and more.

### Components
- [AnimatePresence](/docs/vue-animate-presence.md): Learn how to quickly make exit animations with Motion for Vue's AnimatePresence component.
- [LayoutGroup](/docs/vue-layout-group.md): Animate layout across component groups with the LayoutGroup component.
- [LazyMotion](/docs/vue-lazymotion.md): Reduce the bundlesize of Motion for Vue by lazy-loading functionality with the LazyMotion component.
- [motion](/docs/vue-motion-component.md): The motion component is a DOM element supercharged with 120fps animations and gestures.
- [MotionConfig](/docs/vue-motion-config.md): Learn how use the MotionConfig component to set a default transition for all components, define reduced motion settings, or set a security policy.
- [Reorder](/docs/vue-reorder.md): Learn how to create simple drag-to-reorder effects with Motion for Vue's Reorder components.

### Motion Values
- [Motion values](/docs/vue-motion-value.md): Learn how to use Motion's motion values, a performant way to track state and velocity.
- [useMotionTemplate](/docs/vue-use-motion-template.md): Combine multiple motion values with a string template.
- [useMotionValueEvent](/docs/vue-use-motion-value-event.md): Subscribe to motion value events from a Vue component.
- [useScroll](/docs/vue-use-scroll.md): Learn how to create scroll-linked animations with Motion's simple yet powerful useScroll hook.
- [useSpring](/docs/vue-use-spring.md): useSpring creates a motion value that animates to its target with a spring.
- [useTime](/docs/vue-use-time.md): A motion value that updates every animation frame with the duration, in milliseconds, since it was created.
- [useTransform](/docs/vue-use-transform.md): useTransform creates a new motion value that transforms the output of one or more motion values.
- [useVelocity](/docs/vue-use-velocity.md): Create a motion value that tracks the velocity of another motion value.

### Hooks
- [useAnimate](/docs/vue-use-animate.md): Create an animate function with animation controls, timelines, scoped selectors and automatic cleanup.
- [useAnimationFrame](/docs/vue-use-animation-frame.md): Create an animation loop that runs a callback every frame.
- [useDragControls](/docs/vue-use-drag-controls.md): Learn how to manually start/stop dragging a motion component with the useDragControls hook.
- [useInView](/docs/vue-use-in-view.md): A simple state hook for detecting when an element is within the viewport.
- [useReducedMotion](/docs/vue-use-reduced-motion.md): A hook that determines whether the user prefers reduced motion.

### Integrations
- [Integrate Motion with Radix](/docs/vue-radix.md): Learn how to animate Radix components with Motion for Vue. Easily add layout, exit and spring animations to your Radix components. With live code examples for Tabs, Tooltip and more.

