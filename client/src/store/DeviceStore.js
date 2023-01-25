import {makeAutoObservable} from "mobx";

const mockTypes = [
    {id: 1, name: "Mobiles" },
    {id: 2, name: "TV" },
    {id: 3, name: "Laptops" },
    {id: 4, name: "Others" },
]

const mockBrands = [
    {id: 1, name: "Samsung" },
    {id: 2, name: "Voyge" },
    {id: 3, name: "Horizonts" },
    {id: 4, name: "Others" },
]

const mockDevices = [
    {id: 1, name: "Iphone 12", price: "123", rating: 5, img: ''},
    {id: 2, name: "Iphone 13", price: "55", rating: 4, img: ''},
]

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {        
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}