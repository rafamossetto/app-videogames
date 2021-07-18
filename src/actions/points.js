export const ORDER_USERS_BY_POINTS = 'ORDER_USER_BY_POINTS';

export function orderUsersByPoints(payload) {
    return { type: ORDER_USERS_BY_POINTS, payload };
}