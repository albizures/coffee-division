import { createStruct, useItemValue } from 'react-take';
import type Content from '../content/content.json';

const contentStruct = createStruct<typeof Content['es']>('content');

export function useContent() {
	return useItemValue(contentStruct);
}
