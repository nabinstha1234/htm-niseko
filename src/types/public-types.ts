import type { Args, ReactRenderer } from '@storybook/react';
import type { AnnotatedStoryFn, ComponentAnnotations } from '@storybook/types';
import type { ComponentProps, ComponentType } from 'react';

/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
export type Meta<TCmpOrArgs = Args> = [TCmpOrArgs] extends [ComponentType<any>]
  ? ComponentAnnotations<ReactRenderer, ComponentProps<TCmpOrArgs>>
  : ComponentAnnotations<ReactRenderer, TCmpOrArgs>;

/**
 * Story function that represents a CSFv2 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type StoryFn<TCmpOrArgs = Args> = [TCmpOrArgs] extends [
  ComponentType<any>,
]
  ? AnnotatedStoryFn<ReactRenderer, ComponentProps<TCmpOrArgs>>
  : AnnotatedStoryFn<ReactRenderer, TCmpOrArgs>;
