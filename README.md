# NumberArranger
A Handwritten Digit Recognition Web App trained on the MNIST dataset of Keras using the CNN model.<br>
**Tech stack** : Tensorflow, Kears, HTML, CSS, JavaScript.
### Aim 🎯
To make a convolution neural network to recognise handwritten digits by training the model on MNIST dataset available in keras. And further deploy it on web using JS scripting & make a GUI for performing implimentation.

### Project Structure 👇
ML model -> keras -> Tensorflow.js -> (html + css + javascript) -> github pages/vercel/netlify

### MNIST DATASET 📚
The training dataset contain 60000 images and testing contain 10000 images .Each image is 28x28 pixel and grey scale.

### CNN MODEL OVERVIEW 🤖

⚈ It is a 17 layer model with Conv2D,MaxPooling2D,BatchNormalization,Dense,Flatten and Dropout layer combination.<br>
⚈ Input layer has 32 neuron and output layer has 10 neurons as 10 different clases exsist.<br>
⚈ 30 epochs are used.<br>
⚈ Categorical_loss is loss function and adam is used for optimization.<br>
⚈ Model gives around 99.15% accuracy
