const documents = [
  {
    title: 'COP 1 (Haul Road)',
    link: 'https://drive.google.com/file/d/1ZKz7tfBAIz3At9rTkHvMohWACS7RnANg/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP 2 (For Supervisors)',
    link: 'https://drive.google.com/file/d/1K6Tu2t3yo6GpJ5R8bKsrPapygAfCE941/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP 3 (Dumping in dumping yard)',
    link: 'https://drive.google.com/file/d/1AQFf6az6D5SI7fMpe_WkGxaF-Mfba_HQ/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP 4 (fly ash)',
    link: 'https://drive.google.com/file/d/1GS6oNai7xyGAbl9sf6ghzko5S0nNuFYg/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP 5 (Person engaged in stock piles)',
    link: 'https://drive.google.com/file/d/1yhVsvlsztkqq6RJctq3y_cG3I8pj5c4T/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP 6 (Road Safety)',
    link: 'https://drive.google.com/file/d/1avVXQcj4FV42kjHoOGw14Han07sBdTdj/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP 7 (Working system of Weigh bridge)',
    link: 'https://drive.google.com/file/d/19_oE93DaZOvJij6cm1Lv5L-DvKK7Dk1j/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP 8 (Prevent Dump Failure)',
    link: 'https://drive.google.com/file/d/1gpajw5zI7NDd5ZhXoJ8yjaJifJff1Qj8/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP 9 (Loading and Unloading Coal)',
    link: 'https://drive.google.com/file/d/1HXkUrROiDq9-7tUaRtZnlaNJnND5fYwU/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP 10 (For dumper operators)',
    link: 'https://drive.google.com/file/d/1W5K09Y_wBN-VDhkSl8J3_CjK30SpGw61/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP 11 (Excavator operators)',
    link: 'https://drive.google.com/file/d/1FqF23uSRwFhhwuw_Wy9Y7fG2Cqv42G47/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP 12 (Loader Operation)',
    link: 'https://drive.google.com/file/d/1JZNAhjiQOAKui1HrVoljc4yyYBzyh6-W/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP 13 (Grader Operator)',
    link: 'https://drive.google.com/file/d/1agUTDjm07Xjcr2LB4sSGV5rfRw1IcBU-/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP 14 (Dozer Operations)',
    link: 'https://drive.google.com/file/d/13eAUDV7mtWyzkOhrqhXsd9f8UXWypdHM/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP 15 (For Excavator Operations)',
    link: 'https://drive.google.com/file/d/1Ab4GeDDnLLSQ38I8YqR8DNCtrAl4i1UC/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_16',
    link: 'https://drive.google.com/file/d/1iFLF2eQBFCO6qz_EEK_XQ59xXpSU0R2x/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_17',
    link: 'https://drive.google.com/file/d/1XHwzmbkes5CMCjkxdnXeo5WFsUx5uA0a/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_18',
    link: 'https://drive.google.com/file/d/1BPm7eELnuAMd33A1avEi9UDWRb1yXv-r/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_19',
    link: 'https://drive.google.com/file/d/1S7Rnz9eAiTH9DO2zOWpeskywhTlK4XgL/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_20',
    link: 'https://drive.google.com/file/d/1k-bwv1vz1oeHN4HqpcWZQ-D1jtDjJ0WS/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_21',
    link: 'https://drive.google.com/file/d/1odL5kGASpy-CG5RCIoL_8w-BnZcS5QMm/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_22',
    link: 'https://drive.google.com/file/d/1vwFHADPKET_vDbcEjXCVPKj4GKWkybR5/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_23',
    link: 'https://drive.google.com/file/d/1LFkAlfiwYLleszvWlCsUG6JTjn1zrsEj/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_24',
    link: 'https://drive.google.com/file/d/1tAGiuHoKZ_uI7xrjVr85bX7XmSa3HHuX/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_25',
    link: 'https://drive.google.com/file/d/13wps2SHnNISfRLZw6ZQfO_bYaE0J1uwC/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_26',
    link: 'https://drive.google.com/file/d/1Yb3ZGN4nCHBtzU0D6HlPAj60KsOqHCi0/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_27',
    link: 'https://drive.google.com/file/d/1VdI81vjzIMk4ANVlHZeb2m5xRQk_0D9s/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_28',
    link: 'https://drive.google.com/file/d/1Vp_U_ZH3B5pYWa9Ex3-y2rnn3bu6kK4R/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_29',
    link: 'https://drive.google.com/file/d/1sEr_Hn_48EVsFkf03eRAhNRUEEsKNvjd/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_30',
    link: 'https://drive.google.com/file/d/1wnvR2AB-wJNtZqardw1duKzb9W9XTc5u/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_31',
    link: 'https://drive.google.com/file/d/195ytceNxmSd4Ou8AaSTFmZ6mQtiYug6q/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_32',
    link: 'https://drive.google.com/file/d/1f5S_A3tc7SUsmvy0dSxOrEw5UC-hMFrg/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_33',
    link: 'https://drive.google.com/file/d/1_wqo4geVTLboqxAHNBkwaK30mVS7SBua/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_34',
    link: 'https://drive.google.com/file/d/1L1YSPlbAIAXijh3OLM7gcxcFM7C2Yp9k/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_35',
    link: 'https://drive.google.com/file/d/1iG3d-SBcfdq0PkzDA3RHrGggsHPduO4l/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_36',
    link: 'https://drive.google.com/file/d/1XnzgemCEuqUwrP6HO-961Bo-iCn_2L1K/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_37',
    link: 'https://drive.google.com/file/d/1is6dLwCkX4idTzLuNhz3e1CnCsQFL5Ux/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_38',
    link: 'https://drive.google.com/file/d/10ZNYbOQaGFjsE-RE-RmD3RB26dGWc5oV/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_39',
    link: 'https://drive.google.com/file/d/1zQ_6Tt8Lnkxr3jbRNrv551LlMPPVL2K6/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_40',
    link: 'https://drive.google.com/file/d/1NzYTbYJQ0yjKUzje-6cWVOhJ2dBciRrE/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_41',
    link: 'https://drive.google.com/file/d/1rQhpNJblPdDsChsj7SqpMzt_fN7Yc_9I/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_42',
    link: 'https://drive.google.com/file/d/1fhYY8JsO40GKW4N3HG8q3-CdO2RLfppI/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_43',
    link: 'https://drive.google.com/file/d/1BGWpoWvegD2k4nQ7-bG_iPaTHm45yNs9/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_44',
    link: 'https://drive.google.com/file/d/18jDV2Tox75pC68G_s6kOb33d3PoByiLt/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_45',
    link: 'https://drive.google.com/file/d/1Bn37mf4Bu5uqjHqbz58hpikhQilWItGU/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_46',
    link: 'https://drive.google.com/file/d/1FPygtl-Fc6y9k93n8m0Yv14_9O38JXYQ/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_47',
    link: 'https://drive.google.com/file/d/1xE4gJ-tjXuIfMJiO97A8Go2lyX5ppepu/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_48',
    link: 'https://drive.google.com/file/d/1U6CvKaZOKEWIIo2PN5xpp61XLHR9oVXv/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_49',
    link: 'https://drive.google.com/file/d/1qw0zHg0b8TKFxjNUeey5i2hzhJaP5s_5/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_50',
    link: 'https://drive.google.com/file/d/1TYzObFl_mNcDWbWUCExBiEhP28opT0Hr/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_51',
    link: 'https://drive.google.com/file/d/1TRAJ5-lz5gBF9Jd39fcasHuiTwjmYSjT/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_52',
    link: 'https://drive.google.com/file/d/154fp9mNGx7_790bhVK5s6g7e5KcipwTU/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_53',
    link: 'https://drive.google.com/file/d/10bPCqy5QNa9JrcUP-r_kwsDrfmqcloVU/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_54',
    link: 'https://drive.google.com/file/d/1P5gCfBBjLJWoCFKyHXb5CPAWtEaFJZLk/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_55',
    link: 'https://drive.google.com/file/d/12lScUh40dAJsmV0Vul6pA4GAAtDPQFGN/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_56',
    link: 'https://drive.google.com/file/d/1OqIeyk0TsRwYWG5ARgnTDz8G5lY45jQ0/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_57',
    link: 'https://drive.google.com/file/d/17UPzvm0SWGs-mspMMRDRNlBe5dK3DNSW/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_58',
    link: 'https://drive.google.com/file/d/10eaQCGWRWHdOcARiBTkov7ufw8t1AOuG/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_59',
    link: 'https://drive.google.com/file/d/1034V1P-fkwlbjFGEG_4huOguwTHWWBBy/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_60',
    link: 'https://drive.google.com/file/d/1oD4wIRg3jVTwgV_0cAmujUv_pn80BhP6/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_61',
    link: 'https://drive.google.com/file/d/1HOQu32xFgXF6HufYZybanrjTcpMf4VMv/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_62',
    link: 'https://drive.google.com/file/d/1j70DIzEE4QX3K1_gIhIXLHF_vaG5Ihnq/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_63',
    link: 'https://drive.google.com/file/d/1fKmFYsiOCNtr8RogL5LVDxye0y_1Euc3/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_64',
    link: 'https://drive.google.com/file/d/1TntHD1ulB6yCyRAPoBNnCiCH6RT_GU0f/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_65',
    link: 'https://drive.google.com/file/d/1dRjXkEoNJrbzMLArKcAftuVRXsWYmd2R/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_66',
    link: 'https://drive.google.com/file/d/1oP0N_2EPz5tnA0-nChDCbunY-F0PWwi3/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_67',
    link: 'https://drive.google.com/file/d/1r98Rsg7MFqXAJcs6Hyyzhq6RaJqXesrB/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_68',
    link: 'https://drive.google.com/file/d/1u5znIh5fZtaOb6nIlQ2iHkoMKJYgdBSl/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_69',
    link: 'https://drive.google.com/file/d/1g-x6RZfbxQ5cGh_kr9MY2PkViI83g99I/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_70',
    link: 'https://drive.google.com/file/d/1XiA7vrGr7sEHS5Jmo_GuY0-lx5-i2pqu/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_71',
    link: 'https://drive.google.com/file/d/1Vp5UpLRM9hUXhdxroojH7CEDez_fBJoZ/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_72',
    link: 'https://drive.google.com/file/d/1eR6v2DufllgvT6FTiYPGHLh9tcL3J14u/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_73',
    link: 'https://drive.google.com/file/d/1sE3WJz5yjS6UNb0EnmXrE39Elm4swCKH/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_74',
    link: 'https://drive.google.com/file/d/1T8mP7byFozgJpcSn91EP5s4_RkTRhNzJ/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_75',
    link: 'https://drive.google.com/file/d/16mgtM6nsq6S5GFXUU1J3hVbAxbUJ_vM7/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_76',
    link: 'https://drive.google.com/file/d/1NAgJV8FYEX2_rHiwjVG6XbSum9Mxjpxp/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_77',
    link: 'https://drive.google.com/file/d/1wm5ZQSc3s6ATz-FkECvQgDGrMZ6q0PWv/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_78',
    link: 'https://drive.google.com/file/d/1IKP3_1ViqUWGD52qGPwpaRKpa_4a5VRY/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_79',
    link: 'https://drive.google.com/file/d/19lLup50CKMz3iFPpmpGqBvo-S53ZlrhZ/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_80',
    link: 'https://drive.google.com/file/d/1aJvEOCnwmkMJUhjT8as6d9BFnfDVy8F0/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_81',
    link: 'https://drive.google.com/file/d/1e-LpAHbnrisFWrjbiNiPhjz-LI-n2WKu/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_82',
    link: 'https://drive.google.com/file/d/1ADsbmfw4pz9gytF4Ez0WcJr7Bd1ZB3Y_/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_83',
    link: 'https://drive.google.com/file/d/1QijwP3h9vUUFeIf-PY4VJnoO3RD0Ra4D/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_84',
    link: 'https://drive.google.com/file/d/1RdVxTKLSz8sJ1Jo1HOQwjkuloXPgo93H/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_85',
    link: 'https://drive.google.com/file/d/1_N1YLrWdjEWghNlwm4ygl-eQ5vL94yzV/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_86',
    link: 'https://drive.google.com/file/d/1GAExHkxOFCkBqNH_ed8npmRoQ-qaRTgc/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_87',
    link: 'https://drive.google.com/file/d/1L7mqHNLKmRvHK1Y7G8QJApvLBaPrjQXv/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_88',
    link: 'https://drive.google.com/file/d/1jxgHr8TRKPjIuvPCrCtM5-XtzaKy62d_/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_89',
    link: 'https://drive.google.com/file/d/1y3b6cqFO-xpK1w0jS2H58n129NEfBzAL/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_90',
    link: 'https://drive.google.com/file/d/1g9BTMSdkHKaQRIvYyM_M91rrATYA4RSe/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_91',
    link: 'https://drive.google.com/file/d/1faNmY9K6rdF7q-T4c7JqyDKg5r4dj9zd/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_92',
    link: 'https://drive.google.com/file/d/1HGmp4xxaerr5FIEEY6Eu90T2EJfSQs9p/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_93',
    link: 'https://drive.google.com/file/d/1zj6cNWKcLSi7dG1xOR51k3IikUyuafzd/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_94',
    link: 'https://drive.google.com/file/d/1TsHj0jF1joVikyEPRidz0aDFq9dVDyUa/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_95',
    link: 'https://drive.google.com/file/d/1E9Xsv7D_SeZe13nlZzaRSA4B73axgpqk/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_96',
    link: 'https://drive.google.com/file/d/1u0aDXKelH7WZ6JZNdYi5CaUJlD2Kxb2e/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_97',
    link: 'https://drive.google.com/file/d/121uclTjkPDl_UlW0ilVDtJDjIkd8xtz-/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_98',
    link: 'https://drive.google.com/file/d/1R5CMUTYHlWRNhGHDSP85x1J2kbPF65Gz/view?usp=drivesdk',
    color: 'orange',
  },
  {
    title: 'COP_99',
    link: 'https://drive.google.com/file/d/1JTrD6oeFLrs_KwpIkstE-SeZQvMowqK1/view?usp=drivesdk',
    color: 'green',
  },
  {
    title: 'COP_100',
    link: 'https://drive.google.com/file/d/1fufe0C5uKmURozd_bqUPzWomXn7Nf4Id/view?usp=drivesdk',
    color: 'purple',
  },
  {
    title: 'COP_101',
    link: 'https://drive.google.com/file/d/1VJ5noePuhxHtm7aTL4T6hm3FMd9v0Gij/view?usp=drivesdk',
    color: 'pink',
  },
  {
    title: 'COP_102',
    link: 'https://drive.google.com/file/d/1f-xYxlTPQBpN32YYSV6bfLXGXlt6E-cB/view?usp=drivesdk',
    color: 'red',
  },
  {
    title: 'COP_103',
    link: 'https://drive.google.com/file/d/1BmgffmFx1piHcC4_xoTlPixsNu3feB3g/view?usp=drivesdk',
    color: 'blue',
  },
  {
    title: 'COP_104',
    link: 'https://drive.google.com/file/d/1alDopXXbU5FhK9BW9C06ed_sqj4GFJF-/view?usp=drivesdk',
    color: 'orange',
  },
];

const colorMap = {
  blue: { dot: 'bg-blue-400', text: 'text-blue-400', light: 'bg-blue-50' },
  orange: { dot: 'bg-orange-400', text: 'text-orange-400', light: 'bg-orange-50' },
  green: { dot: 'bg-green-400', text: 'text-green-400', light: 'bg-green-50' },
  purple: { dot: 'bg-purple-400', text: 'text-purple-400', light: 'bg-purple-50' },
  pink: { dot: 'bg-pink-400', text: 'text-pink-400', light: 'bg-pink-50' },
  red: { dot: 'bg-red-400', text: 'text-red-400', light: 'bg-red-50' }
};

const InternalMineDocuments = () => {
  return (
    <div className="p-8">
      <div className="mb-3">
        <h2 className="text-2xl font-small text-gray-800 mb-1">Internal Mine Documents</h2>
        <p className="text-gray-500 text-sm">COPs</p>
      </div>

      <div className="bg-white border border-gray-400 rounded-xl shadow-sm ">
        {documents.map(doc => {
          const c = colorMap[doc.color];
          return (
            <a
              key={doc.title}
              href={doc.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2">
                <span className={`w-2.0 h-2.0 rounded-full ${c.dot}`} />
                <span className="text-gray-800 text-sm font-small">{doc.title}</span>
              </div>
              <span className={`px-3 py-1.5 ${c.light} ${c.text} rounded-lg text-sm font-semibold whitespace-nowrap ml-4`}>
                Open PDF →
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default InternalMineDocuments;