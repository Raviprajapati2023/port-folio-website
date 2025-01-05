<template>
  <div>
    <video height="100%" width="100%" controls>
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button @click="startRecognition">Start Recognition</button>
    <button @click="stopRecognition">Stop Recognition</button>
    <div style="overflow-y: auto; height: 100px">
      <p v-html="transcript"></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const videoUrl = ref(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
);
const transcript = ref("");

const startRecognition = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en-US"; // Set the desired language

    recognition.onresult = (event) => {
      const results = Array.from(event.results);
      const finalTranscript = results
        .map((result) => result[0].transcript)
        .join("");
      transcript.value = finalTranscript; // Update transcript
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event);
    };

    recognition.start(); // Start speech recognition
  } else {
    alert("Speech recognition is not supported in this browser.");
  }
};

const stopRecognition = () => {
  if (recognition) {
    recognition.stop(); // Stop speech recognition
  }
};
</script>
