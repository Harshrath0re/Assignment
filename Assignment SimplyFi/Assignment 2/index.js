// Assignment 2
// Define=ing a class to represent the graph of train ticket connections
class Graph {
  constructor() {
    this.graph = {};
  }

  // Method to add an edge to the graph
  addEdge(u, v) {
    if (!this.graph[u]) {
      this.graph[u] = [];
    }
    this.graph[u].push(v);
  }
}

// Function to find the route using depth-first search (DFS)
function findRoute(tickets) {
  const graph = new Graph(); // Create a new graph instance

  // Populate the graph with ticket connections
  for (const ticket of tickets) {
    const [u, v] = ticket.split('-');
    graph.addEdge(u, v);
  }

  // Recursive DFS function to find the route
  function dfs(node, path) {
    path.push(node); // Add the current node to the path

    if (path.length === tickets.length + 1) {
      // If the path length equals the total number of cities, we found a complete route
      return path;
    }

    if (graph.graph[node]) {
      // Check if the current node has neighbors
      for (const neighbor of graph.graph[node]) {
        if (!path.includes(neighbor)) {
          // If the neighbor hasn't been visited yet, recursively explore it
          const newPath = dfs(neighbor, path.slice()); // Create a copy of the path
          if (newPath) {
            return newPath; // If a valid route is found, return it
          }
        }
      }
    }

    path.pop(); // If the current node leads to a dead-end, backtrack
    return null;
  }

  const startNode = 'Kiev'; // Starting city
  const route = dfs(startNode, []); // Find the route using DFS

  return route; // Return the route

}

// Available train tickets
const tickets = [
  "Paris-Skopje", "Zurich-Amsterdam", "Prague-Zurich",
  "Barcelona-Berlin", "Kiev-Prague", "Skopje-Paris",
  "Amsterdam-Barcelona", "Berlin-Kiev", "Berlin-Amsterdam"
];

const route = findRoute(tickets); // Find the route

if (route) {
  console.log("Route taken by your son:");
  console.log(route.join(" -> "));
} else {
  console.log("No valid route found.");
}