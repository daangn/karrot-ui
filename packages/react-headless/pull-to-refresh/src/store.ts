export class Store<T> {
  private state: T;
  private listeners: Set<() => void>;

  constructor(initialState: T) {
    this.state = initialState;
    this.listeners = new Set();
  }

  // Get the current state
  getState() {
    return this.state;
  }

  // Update the state and notify subscribers
  setState(newState: Partial<T>) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((listener) => listener());
  }

  // Subscribe to changes
  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}
