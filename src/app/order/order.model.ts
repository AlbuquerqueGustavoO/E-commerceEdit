class Order {
    constructor(
        public address: string,
        public numero: number,
        public optionalAddress: string,
        public paymentOptional: string,
        public orderItems: OrderItem[] = []
    ) {

    }

}

class OrderItem {
    constructor(public quantity: number, public menuId: string) { }
}

export { Order, OrderItem }