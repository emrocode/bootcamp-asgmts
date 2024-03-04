from ownable import Ownable

class Cart(Ownable):
    from item_manager import show_items

    def __init__(self, owner):
        self.set_owner(owner)
        self.items = []

    def items_list(self):
        return self.items

    def add(self, item):
        self.items.append(item)

    def total_amount(self):
        price_list = []
        for item in self.items:
            price_list.append(item.price)
        return sum(price_list)

    def check_out(self):
        if self.owner.wallet.balance >= self.total_amount():
            # pass
            self.owner.wallet.balance -= self.total_amount()

            for item in self.items:
                item.owner.wallet.deposit(item.price)
                item.owner = self.owner

            self.items.clear()
        else:
            print("Insufficient balance to complete the purchase")
