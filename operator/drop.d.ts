import { Subscribable, Listener, Subscription } from '../interfaces';
export declare class DropOperator<T> implements Subscribable<T> {
    private amount;
    _subscribable: Subscribable<T>;
    constructor(amount: number, _subscribable: Subscribable<T>);
    subscribe(listener: Listener<T>): Subscription;
}
