<template>
    <div class="form-list">
      <h2>Form List</h2>
      <table>
        <thead>
          <tr>
            <th>Form Name</th>
            <th>Added Date & Time</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
         <tr v-for="(form, index) in forms" :key="index">
          <router-link to="/formview"><td>{{ form.name }}
        </td></router-link>
            <td>{{ formatDate(form.addedDateTime) }}</td>
            <td>{{ form.department }}</td>
            <td :class="{ 'completed': form.status === 'completed', 'not-completed': form.status === 'not completed' }">{{ form.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        forms: [
          {
            name: "Form 1",
            addedDateTime: new Date(),
            department: "Department A",
            status: "completed"
          },
          {
            name: "Form 2",
            addedDateTime: new Date(),
            department: "Department B",
            status: "not completed"
          },
          {
            name: "Form 3",
            addedDateTime: new Date(),
            department: "Department C",
            status: "completed"
          },
          {
            name: "Form 4",
            addedDateTime: new Date(),
            department: "Department C",
            status: "completed"
          },
          {
            name: "Form 5",
            addedDateTime: new Date(),
            department: "Department C",
            status: "completed"
          },
          {
            name: "Form 6",
            addedDateTime: new Date(),
            department: "Department C",
            status: "completed"
          },
          {
            name: "Form 7",
            addedDateTime: new Date(),
            department: "Department C",
            status: "not completed"
          },
        ]
      };
    },
    methods: {
      formatDate(date) {
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .form-list {
    max-width: 800px;
    margin: 0 auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
    transition: background-color 0.3s ease; /* Smooth transition effect */
  }
  
  tr:hover {
    background-color: #dcdcdc; /* Lighter shade on hover */
  }
  
  .completed {
    color: green;
  }
  
  .not-completed {
    color: red;
  }
  a{
    text-decoration: none;
    color: black;
  }
  </style>
  