<template>
  <div class="survey-form">
    <h2>Survey Form</h2>
    <div class="question">
      <label for="dropdown">Roll Number:</label>
      <select v-model="answers[0]" id="dropdown">
        <option value="">Select an option</option>
        <option value="option1">7376212IT190 (NAVEEN BHARATHI S)</option>
        <option value="option2">7376212IT180 (MIRUDHUN KUMAR S)</option>
        <option value="option3">7376212IT191 (NAVEEN PRAKASH S)</option>
      </select>
    </div>

    <div class="question" v-for="(question, index) in questions" :key="index">
      <div class="label-div">
        <label :for="'question-' + (index + 2)">{{ question }}</label>
      </div>
      <div class="radio-buttons">
        <input
          type="radio"
          :id="'question-' + (index + 2) + '-0'"
          v-model="answers[index + 1]"
          value="0"
        />
        <label :for="'question-' + (index + 2) + '-0'">0</label>
        <input
          type="radio"
          :id="'question-' + (index + 2) + '-1'"
          v-model="answers[index + 1]"
          value="1"
        />
        <label :for="'question-' + (index + 2) + '-1'">1</label>
        <input
          type="radio"
          :id="'question-' + (index + 2) + '-2'"
          v-model="answers[index + 1]"
          value="2"
        />
        <label :for="'question-' + (index + 2) + '-2'">2</label>
        <input
          type="radio"
          :id="'question-' + (index + 2) + '-3'"
          v-model="answers[index + 1]"
          value="3"
        />
        <label :for="'question-' + (index + 2) + '-3'">3</label>
        <input
          type="radio"
          :id="'question-' + (index + 2) + '-4'"
          v-model="answers[index + 1]"
          value="4"
        />
        <label :for="'question-' + (index + 2) + '-4'">4</label>
        <input
          type="radio"
          :id="'question-' + (index + 2) + '-5'"
          v-model="answers[index + 1]"
          value="5"
        />
        <label :for="'question-' + (index + 2) + '-5'">5</label>
      </div>
    </div>
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        "How satisfied are you with our service?",
        "How likely are you to recommend us to a friend?",
        "How easy was it to use our website?",
        "How would you rate the quality of our products?",
        "How responsive were our customer service representatives?",
      ],
      answers: ["", "", "", "", ""],
    };
  },
  methods: {
    submitForm() {
      // Here you can handle the form submission logic
      console.log("Form submitted with answers:", this.answers);
    },
  },
};
</script>

<style scoped>
.survey-form {
  max-width: 800px;
  margin: 1rem auto auto auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}


h2 {
  text-align: center;
}

.question {
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 20px;
  padding: 1rem;
  border-bottom: 0.5px dashed  black;
}
.radio-buttons{
  justify-self: end;
}



label {
  display: flex;
  align-items: center; /* Align items vertically */
  font-weight: bold;
  margin-bottom: 5px;
}
select {
  padding: 0.5rem 5rem 0.5rem 5rem;
  
}

input[type="radio"] {
 
  margin-right: 5px;
  padding: 0; /* Reset padding */
  appearance: none; /* Remove default appearance */
}

input[type="radio"] + label {
  position: relative;
  padding-left: 30px; /* Space for custom radio button */
  cursor: pointer;
}

input[type="radio"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #aaa;
}

input[type="radio"]:checked + label:before {
  background-color: #4caf50; /* Green for checked radio */
}

input[type="radio"][value="1"] + label:after {
  background-color: #f44336; /* Red for value 1 */
}

input[type="radio"][value="2"] + label:after {
  background-color: #ff9800; /* Orange for value 2 */
}

input[type="radio"][value="3"] + label:after {
  background-color: #ffeb3b; /* Yellow for value 3 */
}

input[type="radio"][value="4"] + label:after {
  background-color: #8bc34a; /* Light green for value 4 */
}

input[type="radio"][value="5"] + label:after {
  background-color: #4caf50; /* Green for value 5 */
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.radio-buttons {
  display: flex;
  align-items: center;
}

.radio-buttons input[type="radio"] {
  margin-right: 10px;
}
</style>
