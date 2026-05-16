class GlobalStore {
  data = null;
  tempData = null;
  GLOBAL_STORE_KEY = 'global-store-key';
  constructor() {
    this.data = JSON.parse(localStorage.getItem(this.GLOBAL_STORE_KEY) || '{}');
    this.tempData = []
  }
  set(key, value, temp = false) {
    this.data[key] = value;
    if (temp) {
      this.tempData.push(key);
    }
    let newData = {...this.data};
    this.tempData.forEach((item) => {
      delete newData[item];
    });
    localStorage.setItem(this.GLOBAL_STORE_KEY, JSON.stringify(newData));

  }
  get(key) {
    return this.data[key] ?? null;
  }
  remove(key) {
    delete this.data[key];
    this.tempData = this.tempData.filter((item) => item !== key);
    let newData = {...this.data};
    this.tempData.forEach((item) => {
      delete newData[item];
    });
    localStorage.setItem(this.GLOBAL_STORE_KEY, JSON.stringify(newData));
  }
}

export default new GlobalStore();

