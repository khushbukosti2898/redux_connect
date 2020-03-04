export const updateUser = name => ({ type: 'user', payload: name });

export const sum = (no1, no2) => ({ type: 'sum', no1: no1, no2: no2 });

export const sub = (no1, no2) => ({ type: 'sub', no1: no1, no2: no2 });

export const div = (no1, no2) => ({ type: 'div', no1: no1, no2: no2 });

export const mul = (no1, no2) => ({ type: 'mul', no1: no1, no2: no2 });

export const post = (data) => ({ type: 'addpost', data:data });
