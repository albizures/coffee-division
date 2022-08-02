import { createItem, useItemValue } from 'react-take';
import type Content from '../content/content.json';

export const contentItem =
	createItem<typeof Content['es']>('content');

export function useContent() {
	return useItemValue(contentItem);
}
