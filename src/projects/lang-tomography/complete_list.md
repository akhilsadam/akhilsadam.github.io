2020 Spring:
- Familiarized myself with Geant4, ROOT, and started running tests.
- Did some model conversion from STEP to STL and OBJ formats, and found a way to import other mesh formats into Geant4.
- Made preliminary energy estimates on a skull phantom, and some mini-simulations for the TOF-PET.

- Spent majority of time running gamma energy conservation tests (by checking conservation on each step) for Geant4.
- Also ran cross-section tests, measuring scatter for different materials.

2020 Summer:
- Started working on 1-meter (single array) PET scanner.
- Calculated cross-section and other data not provided by Eljen and added to geometry.
- Ran surface reflection / absorption / scatter tests for different surface treatments, on LYSO, EJ208, and other materials.

2020 Fall:
- Extended to full 1-meter barrel PET scanner.
- Started work on KNN (limited success due to memory constraints) in PyTorch.
- Had difficulty with pipeline on TACC (output from Geant4 to ROOT to Python), so I started replacing ROOT with direct textfile output.

2021 Spring:
- Implemented KNN and CNN algorithms to improve sub-scintillator position resolution by (about) 20%.
- Tried a variety of algorithms and tests to improve resolution (PCA) with different visualizations, but limited success.

2021 Summer:
- Worked extensively on a 3D reconstruction algorithm for the PET scanner (ART, OSEM).
- Was forced to stop as memory consumption was excessive for a voxelized structure (I did not have sufficient experience with rendering algorithms at the time -- I expect I can do much better now).
- Helped with general labwork, including with Mini-PET, data reconstruction, analysis, and other runs.
- Started meeting with Dr. Nuno Ferreira and Dr. Cesar, and started work on IDL reconstruction (evaluated several other toolkits as well).

2021 Fall:
- Started writing paper, and made comprehensive tests/plots from start-to-finish for the PET scanner.
- - Comprehensive plots include previous tests, and new summary plots (sigma_alpha summaries) that show trends (and the travel protocol : number of surface interactions vs boundary time). 
- Made Blender renders of the scanner (for promotion purposes)
- Helped Mr. Won with initial Geant4 setup for the extruded wavelength shifter for LEGEND.
- Helped with general labwork, including with the cleanroom cleanup (with Firas) and hadron monitor. Continued helping with Mini-PET, data reconstruction, analysis, and other runs.
- Discussed a proper reconstruction package with Kyle and contributed some code. Also found some dramatic optimizations from other groups using GPU-accelerated optics.
- Wrote abstract for APS April 2022.
- Continued work on IDL reconstruction (was quite slow as Dr. Ferreira was extremely busy) - this ended in early spring as other methods were more promising.

- Realized EJ208 was an incorrect material, and began switch / rerunning with EJ280 (a wavelength shifter). This is about the time the J-PET (Dr. Moskal's) paper came to my attention.

2022 Spring:
- "Presented" a video virtually at APS April 2022.
- Continued work on the paper, but the poor performance (as compared to J-PET), missing EJ280 parameters, and remaining issues with reconstruction made me lose motivation.
- Advertised this work to my classmates, but no one was interested in continuing it.
- Little work was done in the spring, as I was extremely busy with other projects and classes.


At some point, I did work briefly on NoVA data with Ms.Tapia, but it was too brief to even remember.