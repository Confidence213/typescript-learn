let displayName: string = "Jess's standing desk";
let inventoryType: string = 'furniture';
let trackingNumber: string = 'FD123455';
let createDate: Date = new Date();

type Cost = number | string;

let originalCost: Cost;

if (typeof originalCost == 'number') {
  let cost: number = originalCost;
} else {
  let x = originalCost;
}

enum InventoryItemType {
  COMPUTER = 'computer',
  FURNITURE = 'furniture',
}

interface InventoryItem {
  displayName: string;
  inventoryType: InventoryItemType; // 'computer' | 'furniture'
  trackingNumber: string; // readonly
  createDate: Date;
  originalCost?: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: 'Macbook Pro 15 Retina',
  inventoryType: InventoryItemType.COMPUTER,
  trackingNumber: 'MBP123456',
  createDate: new Date(),
});
