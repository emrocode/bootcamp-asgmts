from customer import Customer
from item import Item
from seller import Seller
seller = Seller("DICストア")
for i in range(10):
    Item("CPU", 40830, seller)
    Item("Memory", 13880, seller)
    Item("Motherboard", 28980, seller)
    Item("Power Supply Units", 8980, seller)
    Item("PC Case", 8727, seller)
    Item("3.5 inch HDD", 10980, seller)
    Item("2.5 inch SSD", 13370, seller)
    Item("M.2 SSD", 12980, seller)
    Item("CPU Cooler", 13400, seller)
    Item("Graphics Board", 23800, seller)

print("🤖 Please tell me your name.")
customer = Customer(input())

print("🏧 Enter the amount you wish to charge to your wallet")
customer.wallet.deposit(int(input()))

print("🛍️ Start shopping")
end_shopping = False
while not end_shopping:
    print("📜 Product list")
    seller.show_items()

    print("Please enter the product number")
    number = int(input())

    print("Please enter the quantity of products")
    quantity = int(input())

    items = seller.pick_items(number, quantity)
    for item in items:
        customer.cart.add(item)
    print("🛒 Cart items")
    customer.cart.show_items()
    print(f"🤑 Total amount: {customer.cart.total_amount()}")

    print("😭 Do you want to finish shopping?(yes/no)")
    end_shopping = input() == "yes"

print("💸 Do you want to confirm your purchase?(yes/no)")
if input() == "yes":
    customer.cart.check_out()

print("୨୧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ Results ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈୨୧")
print(f"🛍️ Property of {customer.name}")
customer.show_items()
print(f"😱👛 {customer.name} wallet balance in: {customer.wallet.balance}")
print(f"📦 Stock status of {seller.name}")
seller.show_items()
print(f"😻👛 {seller.name} wallet balance in: {seller.wallet.balance}")
print("🛒 Cart contents")
customer.cart.show_items()
print(f"🌚 Total amount: {customer.cart.total_amount()}")
print("🎉 End")
