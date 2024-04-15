export abstract class Result<T, E extends Error> {
    public readonly value?: T
    public readonly error?: E
  
    constructor(value?: T, error?: E) {
      if (value !== undefined && error !== undefined) {
        throw new Error('Both value and error cannot be defined')
      }
      this.value = value
      this.error = error
    }
  
    isRight(): boolean {
      return this.value !== undefined
    }
  
    isLeft(): boolean {
      return this.error !== undefined
    }
  
    fold(onRight: (value: T) => void, onLeft: (error: E) => void){
      if(this.isRight()){
        onRight(this.value!)
      }else{
        onLeft(this.error!)
      }
    }
  
    foldRight(onRight: (value: T) => void){
      if(this.isRight()){
        onRight(this.value!)
      }
    }
  
    foldLeft(onLeft: (error: E) => void){
      if(this.isLeft()){
        onLeft(this.error!)
      }
    }
  }
  
  export class Right<T> extends Result<T, any> {
    public readonly value?: T
    constructor(value: T) {
      super()
      this.value = value
    }
  }
  
  export class Left<E extends Error> extends Result<any, E> {
    public readonly error?: E
    constructor(error: E) {
      super()
      this.error = error
    }
  }
  