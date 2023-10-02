<link rel="stylesheet" href="/static/css/phogroup.css">
<link rel="stylesheet" href="/static/css/layout-poster.css">
<link rel="stylesheet" href="/static/css/card-inner.css">

<div class="card" markdown="1">

# Mini-PET: Testbed Scanner (2 PCBs)

 - Some representatives of our work on the Mini-PET testbed scanner, a small prototype of a Positron Emission Tomography (PET) Scanner; see the [UTKL Group](http://www.hep.utexas.edu/utkl/index.html) for more information.


 SiPM (Silicon Photomultiplier) PCBs were evaluated in pairs bracketing a Na-22 radioactive source (in a 17C dark box).
 LYSO crystal scintillators were used to detect radiation.
![SiPM PCBs](/static/figures/mini-pet/sipm.png)
![Layout](/static/figures/mini-pet/layout.png)


---

General energy deposition can be measured by charge in sensor pixels.

![Charge Per Channel](/static/figures/mini-pet/Charge_Integration.png)

Counting all coincidences (where two crystals detect radiation within a short time window) for all channel pairs (all radiation lines) bracketing the source, we can generate a sensitivity map.

![Sensitivity Map](/static/figures/mini-pet/Coincidence_Sums.png)

---

Energy resolution measurements for a particular channel pair follow (where we plot histograms of energy deposition in two individual crystals bracketing the source.) Notice the two energy peaks due to the photoelectric effect, where all the gamma energy is deposited in the crystal.
The resolution of these peaks is a measure of the detector's energy resolution (enabling dosimetry and radiation type detection).
Note the x-axis is in arbitrary detector energy units.

![Energy Resolution](/static/figures/mini-pet/EnergySpectrumPair127-14.png)

For all channel pairs (all radiation lines) bracketing the source, the average energy resolution of each SiPM PCB can be calculated.

![Energy Resolution](/static/figures/mini-pet/EnergyResolutionPCB5.png)
![Energy Resolution](/static/figures/mini-pet/EnergyResolutionPCB6.png)
![Energy Heatmap](/static/figures/mini-pet/Energy_Heatmap.png)

---

Time resolution is also necessary to invert for the annihilation point of the radiation. The time difference between crystal pairs detecting radiation is histogrammed below (also known as coincidence time resolution).

![Time Resolution](/static/figures/mini-pet/CTR.png)

This test had the source mounted low with respect to the PCBs, so a regional distribution can be seen in the time resolution. Note one PCB is flipped relative to the other.

![Time Resolution](/static/figures/mini-pet/CTR_Histogram.png)

A heatmap can also show locations of poor time resolution.

![Time Resolution](/static/figures/mini-pet/CTR_Heatmap.png)

</div>