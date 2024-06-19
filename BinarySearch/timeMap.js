/**
 * TimeMap class is designed to store key-value pairs with timestamps.
 * It allows you to retrieve the value associated with a key at any given timestamp.
 */
class TimeMap {
  constructor() {
    // Initialize the store as a Map to hold key-value pairs,
    // where each key maps to an array of objects containing value and timestamp.
    this.store = new Map();
  }

  /**
   * Set a value for a specific key at a given timestamp.
   * If the key does not exist, initialize it with an empty array.
   *
   * @param {string} key - The key to store the value against.
   * @param {string} value - The value to be stored.
   * @param {number} timestamp - The timestamp at which the value is to be stored.
   */
  set(key, value, timestamp) {
    // Check if the key already exists in the store.
    if (!this.store.has(key)) {
      // If the key does not exist, initialize an array for it.
      this.store.set(key, []);
    }
    // Push the new value along with its timestamp to the array associated with the key.
    this.store.get(key).push({ value, timestamp });
  }

  /**
   * Retrieve the value associated with the key at or before the given timestamp.
   * Utilizes binary search to find the appropriate value efficiently.
   *
   * @param {string} key - The key to look up.
   * @param {number} timestamp - The timestamp to find the value for.
   * @returns {string} The value associated with the key at the closest timestamp before or equal to the given timestamp.
   */
  get(key, timestamp) {
    // Return an empty string if the key does not exist in the store.
    if (!this.store.has(key)) return "";

    // Initialize a variable to store the most recent value found.
    let possibleValue = "";
    // Retrieve the array of pairs (value and timestamp) for the given key.
    const pairs = this.store.get(key);
    // Define the bounds for binary search.
    let left = 0;
    let right = pairs.length - 1;

    // Perform binary search to find the largest timestamp <= given timestamp.
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (pairs[mid].timestamp <= timestamp) {
        // Update possibleValue to the current value if its timestamp is <= given timestamp.
        possibleValue = pairs[mid].value;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // Return the most recent value found.
    return possibleValue;
  }
}
