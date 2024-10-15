# How to Run the Project with Node.js

## Clone the Project

Clone the repository from GitHub to your local machine:

## Navigate to the project folder:

cd container-water

### Install Node.js

If Node.js isn't already installed, download and install it from nodejs.org.
Once installed, verify that Node.js is working correctly by running:

## Run the Tests with Node.js

The project contains a file resultTestCases.js that generates random test cases for the maxArea function. Once you've written or modified the function in testMaxArea.js, you can run the tests.

To execute the project and see the test results, use the following command in your terminal:

- `node resultTestCases.js`

## Using VSCode Live Share for Collaboration

If you're working in a team, you can use VSCode Live Share to collaborate in real-time.

Install the Live Share extension in Visual Studio Code.
Open the project in VSCode.
Start a Live Share session by clicking the Live Share icon in the sidebar or using the View > Live Share menu.
Share the generated URL with your teammates to collaborate on the project.
Project Structure
Here is an overview of the project structure:

## Project Structure

Here is an overview of the project structure:

```bash
├── resultTestCases.js     # Generates the random test cases
├── testCases.js            # Main file to run the tests
├── generateTestCases.js   # Generates random input arrays
```

# Container With Most Water

## Description

Given an integer array `height` of length `n`, where there are `n` vertical lines drawn. The two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.

The task is to find two lines that, together with the x-axis, form a container that can store the most water. You need to return the maximum amount of water that the container can store.

### Constraints:

- `n == height.length`
- `2 <= n <= 105`
- `0 <= height[i] <= 104`

### Note:

You may not slant the container; it must be upright.

## Example 1:

![Container Example](./asset/question_11.jpg)

```txt
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

## Example 2:

```txt
Input: height = [1,1]
Output: 1
```

### Constraints:

- `n == height.length`
- `2 <= n <= 105`
- `0 <= height[i] <= 104`
