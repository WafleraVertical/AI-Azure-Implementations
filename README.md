#AI Implementations
Este proyecto es una colección de ejercicios que demuestran el uso de la API de Azure orientada a la inteligencia artificial. Incluye diversas funcionalidades, como la detección de objetos en imágenes y la conversión de texto a voz.

#Funcionalidades
Hot Dog Detector: Analiza imágenes subidas por el usuario utilizando la API de Azure Computer Vision para determinar si contienen un hot dog.
Text to Speech: Convierte texto a voz utilizando la API de Azure Text to Speech.
Tecnologías Utilizadas
React
Vite
Azure Cognitive Services (Computer Vision y Text to Speech)
#Instalación

#Clona el repositorio:

git clone https://github.com/tu-usuario/ai-implementations.git

#Navega al directorio del proyecto:


cd ai-implementations

#Instala las dependencias:



yarn install
Crea un archivo .env en la raíz del proyecto y agrega tus claves de API de Azure:



VITE_AZURE_CV_API_KEY=tu_api_key_cv
VITE_AZURE_CV_REGION=eastus
VITE_AZURE_TTS_API_KEY=tu_api_key_tts
VITE_AZURE_TTS_REGION=eastus
#Ejecuta la aplicación:


yarn dev
Abre tu navegador y ve a:


http://localhost:5173

#Uso
Hot Dog Detector: Sube una imagen desde tu dispositivo para analizar si contiene un hot dog.
Text to Speech: Escribe texto en la interfaz para convertirlo a voz.
