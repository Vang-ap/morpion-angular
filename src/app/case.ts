export class Case {
  value = '';
  id!: number;

  setValue(val: string) {
    this.value = val;
  }

  setId(id: number) {
    this.id = id;
  }
}
