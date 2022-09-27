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

function clone<T, U>(source: T, options: U): T {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}

const cloned = clone(inventoryItem, { deep: true });

interface KeyValuePair<TKey, TValue> {
    Key: TKey;
    Value: TValue;
}

const keyValue: KeyValuePair<string, number> = { Key: 'something', Value: 1234 };
const keyValue2: KeyValuePair<number, boolean> = { Key: 1234, Value: true };

declare var Vue: any;
