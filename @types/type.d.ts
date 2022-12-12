declare global {
  export interface Window {
    ethereum: any;
  }
}
// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {};
