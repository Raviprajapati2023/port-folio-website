import { ref, onMounted, onUnmounted } from "vue";

// by convention, composable function names start with "use"
export function useMouse() {
  // state encapsulated and managed by the composable
  const xaxis = ref(0);
  const yaxis = ref(0);

  // a composable can update its managed state over time.
  function update(event) {
    xaxis.value = event.pageX;
    yaxis.value = event.pageY;
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));

  // expose managed state as return value
  return { xaxis, yaxis };
}
