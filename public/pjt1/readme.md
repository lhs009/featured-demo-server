# Towards Fast, Accurate and Stable 3D Dense Face Alignment

## Introduction

This work extends [3DDFA](https://github.com/cleardusk/3DDFA), named **3DDFA_V2**, titled [Towards Fast, Accurate and Stable 3D Dense Face Alignment](https://guojianzhu.com/assets/pdfs/3162.pdf), accepted by [ECCV 2020](https://eccv2020.eu/). The supplementary material is [here](https://guojianzhu.com/assets/pdfs/3162-supp.pdf). The [gif](./docs/images/webcam.gif) above shows a webcam demo of the tracking result, in the scenario of my lab. This repo is the official implementation of 3DDFA_V2.

Compared to [3DDFA](https://github.com/cleardusk/3DDFA), 3DDFA_V2 achieves better performance and stability. Besides, 3DDFA_V2 incorporates the fast face detector [FaceBoxes](https://github.com/zisianw/FaceBoxes.PyTorch) instead of Dlib. A simple 3D render written by c++ and cython is also included. This repo supports the onnxruntime, and the latency of regressing 3DMM parameters using the default backbone is about **1.35ms/image on CPU** with a single image as input. If you are interested in this repo, just try it on this **[google colab](https://colab.research.google.com/drive/1OKciI0ETCpWdRjP-VOGpBulDJojYfgWv)**! Welcome for valuable issues, PRs and discussions 😄

<p align="center">
  <img src="../images/trump_biden_3d.jpg" alt="demo" width="640px">
</p>
