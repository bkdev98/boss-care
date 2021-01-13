export const SHOW_MODALIZE = 'SHOW_MODALIZE';

export function showModalize({
  id,
  title,
  content,
}: {
  id?: string;
  title: string;
  content?: JSX.Element;
}) {
  return {type: SHOW_MODALIZE, payload: {id, title, content}};
}

export const HIDE_MODALIZE = 'HIDE_MODALIZE';

export function hideModalize() {
  return {type: HIDE_MODALIZE};
}
