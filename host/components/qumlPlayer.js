import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import "@project-sunbird/sunbird-quml-player-web-component/styles.css";
import "@project-sunbird/sunbird-quml-player-web-component/sunbird-quml-player";
import styles from "./Player.module.css"

const qumlPlayer = () => {
    let trackData = [];
 const sectionContent = {
        "copyright": "lifeglobal",
        "lastStatusChangedOn": "2024-05-21T06:51:06.709+0000",
        "timeLimits": "{\"maxTime\":\"1200\",\"warningTime\":\"900\"}",
        "program": [
            "Second chance"
        ],
        "author": "Content Creator Pratham",
        "children": [
            {
                "lastStatusChangedOn": "2024-05-21T06:51:06.664+0000",
                "parent": "do_1140556713363128321676",
                "children": [
                    {
                        "copyright": "lifeglobal",
                        "lastStatusChangedOn": "2024-05-21T06:52:30.033+0000",
                        "parent": "do_1140556740582932481677",
                        "author": "Content Creator Pratham",
                        "name": "What is the result of (8 + 2) ?",
                        "createdOn": "2024-05-15T13:44:35.543+0000",
                        "channel": "01369885294383923244",
                        "lastUpdatedOn": "2024-05-21T06:52:30.033+0000",
                        "subject": [
                            "Math"
                        ],
                        "showTimer": "No",
                        "identifier": "do_1140556752940482561679",
                        "gradeLevel": [
                            "Grade 6"
                        ],
                        "compatibilityLevel": 4,
                        "audience": [
                            "Student"
                        ],
                        "se_boards": [
                            "Gujarat Secondary and Higher Secondary Education Board"
                        ],
                        "primaryCategory": "Multiple Choice Question",
                        "se_mediums": [
                            "Hindi"
                        ],
                        "downloadUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556752940482561679/what-is-the-result-of-8-2_1716274349961_do_1140556752940482561679_2.ecar",
                        "se_subjects": [
                            "Math"
                        ],
                        "medium": [
                            "Hindi"
                        ],
                        "interactionTypes": [
                            "choice"
                        ],
                        "framework": "gujaratboardfw",
                        "versionKey": "1715859720439",
                        "mimeType": "application/vnd.sunbird.question",
                        "code": "c26bc355-b76a-f5d7-eb9c-3e83a3c6690f",
                        "license": "CC BY 4.0",
                        "version": 1,
                        "prevStatus": "Draft",
                        "templateId": "mcq-vertical",
                        "language": [
                            "English"
                        ],
                        "board": "Gujarat Secondary and Higher Secondary Education Board",
                        "showFeedback": "No",
                        "objectType": "Question",
                        "status": "Live",
                        "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                        "contentEncoding": "gzip",
                        "depth": 2,
                        "lastPublishedBy": "6bc1b99e-a1ba-4f34-9faf-c6969befb6e6",
                        "se_gradeLevels": [
                            "Grade 6"
                        ],
                        "se_FWIds": [
                            "gujaratboardfw"
                        ],
                        "allowAnonymousAccess": "Yes",
                        "contentDisposition": "inline",
                        "artifactUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556752940482561679/do_1140556752940482561679_1716187297145.zip",
                        "visibility": "Parent",
                        "qType": "MCQ",
                        "showSolutions": "No",
                        "variants": {
                            "full": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556752940482561679/what-is-the-result-of-8-2_1716274349961_do_1140556752940482561679_2.ecar",
                                "size": "3048"
                            },
                            "online": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556752940482561679/what-is-the-result-of-8-2_1716274350000_do_1140556752940482561679_2_ONLINE.ecar",
                                "size": "1485"
                            }
                        },
                        "index": 1,
                        "pkgVersion": 2
                    },
                    {
                        "copyright": "lifeglobal",
                        "lastStatusChangedOn": "2024-05-21T06:52:30.227+0000",
                        "parent": "do_1140556740582932481677",
                        "author": "Content Creator Pratham",
                        "name": "If you have 5 apples and you buy 7 more, how many apples do you have in total?",
                        "createdOn": "2024-05-15T13:46:49.869+0000",
                        "channel": "01369885294383923244",
                        "lastUpdatedOn": "2024-05-21T06:52:30.227+0000",
                        "subject": [
                            "Math"
                        ],
                        "showTimer": "No",
                        "identifier": "do_1140556763944386561681",
                        "gradeLevel": [
                            "Grade 6"
                        ],
                        "compatibilityLevel": 4,
                        "audience": [
                            "Student"
                        ],
                        "se_boards": [
                            "Gujarat Secondary and Higher Secondary Education Board"
                        ],
                        "primaryCategory": "Multiple Choice Question",
                        "se_mediums": [
                            "Hindi"
                        ],
                        "downloadUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556763944386561681/if-you-have-5-apples-and-you-buy-7-more-how-many-apples-do-you-have-in-total_1716274350170_do_1140556763944386561681_2.ecar",
                        "se_subjects": [
                            "Math"
                        ],
                        "medium": [
                            "Hindi"
                        ],
                        "interactionTypes": [
                            "choice"
                        ],
                        "framework": "gujaratboardfw",
                        "versionKey": "1715859876411",
                        "mimeType": "application/vnd.sunbird.question",
                        "code": "19a8a705-fadf-f577-1eb6-b5c42e5a8770",
                        "license": "CC BY 4.0",
                        "version": 1,
                        "prevStatus": "Draft",
                        "templateId": "mcq-vertical",
                        "language": [
                            "English"
                        ],
                        "board": "Gujarat Secondary and Higher Secondary Education Board",
                        "showFeedback": "No",
                        "objectType": "Question",
                        "status": "Live",
                        "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                        "contentEncoding": "gzip",
                        "depth": 2,
                        "lastPublishedBy": "6bc1b99e-a1ba-4f34-9faf-c6969befb6e6",
                        "se_gradeLevels": [
                            "Grade 6"
                        ],
                        "se_FWIds": [
                            "gujaratboardfw"
                        ],
                        "allowAnonymousAccess": "Yes",
                        "contentDisposition": "inline",
                        "artifactUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556763944386561681/do_1140556763944386561681_1716187297400.zip",
                        "visibility": "Parent",
                        "qType": "MCQ",
                        "showSolutions": "No",
                        "variants": {
                            "full": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556763944386561681/if-you-have-5-apples-and-you-buy-7-more-how-many-apples-do-you-have-in-total_1716274350170_do_1140556763944386561681_2.ecar",
                                "size": "3124"
                            },
                            "online": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556763944386561681/if-you-have-5-apples-and-you-buy-7-more-how-many-apples-do-you-have-in-total_1716274350198_do_1140556763944386561681_2_ONLINE.ecar",
                                "size": "1532"
                            }
                        },
                        "index": 2,
                        "pkgVersion": 2
                    },
                    {
                        "copyright": "lifeglobal",
                        "lastStatusChangedOn": "2024-05-21T06:52:29.770+0000",
                        "parent": "do_1140556740582932481677",
                        "author": "Content Creator Pratham",
                        "name": "What is (15 - 6) ?",
                        "createdOn": "2024-05-15T13:49:14.499+0000",
                        "channel": "01369885294383923244",
                        "lastUpdatedOn": "2024-05-21T06:52:29.770+0000",
                        "subject": [
                            "Math"
                        ],
                        "showTimer": "No",
                        "identifier": "do_1140556775792558081684",
                        "gradeLevel": [
                            "Grade 6"
                        ],
                        "compatibilityLevel": 4,
                        "audience": [
                            "Student"
                        ],
                        "se_boards": [
                            "Gujarat Secondary and Higher Secondary Education Board"
                        ],
                        "primaryCategory": "Multiple Choice Question",
                        "se_mediums": [
                            "Hindi"
                        ],
                        "downloadUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556775792558081684/what-is-15-6_1716274349644_do_1140556775792558081684_2.ecar",
                        "se_subjects": [
                            "Math"
                        ],
                        "medium": [
                            "Hindi"
                        ],
                        "interactionTypes": [
                            "choice"
                        ],
                        "framework": "gujaratboardfw",
                        "versionKey": "1715859893693",
                        "mimeType": "application/vnd.sunbird.question",
                        "code": "9b4fbc59-69a3-dd29-e099-8be990d6f822",
                        "license": "CC BY 4.0",
                        "version": 1,
                        "prevStatus": "Draft",
                        "templateId": "mcq-vertical",
                        "language": [
                            "English"
                        ],
                        "board": "Gujarat Secondary and Higher Secondary Education Board",
                        "showFeedback": "No",
                        "objectType": "Question",
                        "status": "Live",
                        "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                        "contentEncoding": "gzip",
                        "depth": 2,
                        "lastPublishedBy": "6bc1b99e-a1ba-4f34-9faf-c6969befb6e6",
                        "se_gradeLevels": [
                            "Grade 6"
                        ],
                        "se_FWIds": [
                            "gujaratboardfw"
                        ],
                        "allowAnonymousAccess": "Yes",
                        "contentDisposition": "inline",
                        "artifactUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556775792558081684/do_1140556775792558081684_1716187296833.zip",
                        "visibility": "Parent",
                        "qType": "MCQ",
                        "showSolutions": "No",
                        "variants": {
                            "full": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556775792558081684/what-is-15-6_1716274349644_do_1140556775792558081684_2.ecar",
                                "size": "3138"
                            },
                            "online": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556775792558081684/what-is-15-6_1716274349712_do_1140556775792558081684_2_ONLINE.ecar",
                                "size": "1523"
                            }
                        },
                        "index": 3,
                        "pkgVersion": 2
                    }
                ],
                "name": "Basic Arithmetic Assessment Set 1",
                "navigationMode": "non-linear",
                "createdOn": "2024-05-15T13:42:04.694+0000",
                "channel": "01369885294383923244",
                "generateDIALCodes": "No",
                "lastUpdatedOn": "2024-05-21T06:51:06.664+0000",
                "showTimer": "No",
                "identifier": "do_1140556740582932481677",
                "description": "This question set targets multiplication and division, aiming to evaluate basic competencies in these areas. It includes three multiple-choice questions to measure the understanding and application of multiplication and division in everyday scenarios.",
                "containsUserData": "No",
                "allowSkip": "Yes",
                "compatibilityLevel": 5,
                "primaryCategory": "Practice Question Set",
                "setType": "materialised",
                "languageCode": [
                    "en"
                ],
                "attributions": [],
                "versionKey": "1715780524694",
                "mimeType": "application/vnd.sunbird.questionset",
                "code": "5c9b6fd2-2eee-0b64-bfbb-8c1972569178",
                "license": "CC BY 4.0",
                "version": 1,
                "prevStatus": "Draft",
                "showHints": "No",
                "language": [
                    "English"
                ],
                "showFeedback": "Yes",
                "objectType": "QuestionSet",
                "status": "Live",
                "requiresSubmit": "No",
                "keywords": [
                    "math"
                ],
                "shuffle": false,
                "contentEncoding": "gzip",
                "depth": 1,
                "instructions": {
                    "default": "<p>Answer MCQ questions</p>"
                },
                "allowAnonymousAccess": "Yes",
                "contentDisposition": "inline",
                "visibility": "Parent",
                "showSolutions": "No",
                "index": 1
            },
            {
                "lastStatusChangedOn": "2024-05-21T06:51:06.664+0000",
                "parent": "do_1140556713363128321676",
                "children": [
                    {
                        "copyright": "lifeglobal",
                        "lastStatusChangedOn": "2024-05-21T06:52:30.318+0000",
                        "parent": "do_1140556794050068481686",
                        "author": "Content Creator Pratham",
                        "name": "What is (15 - 6) ?",
                        "createdOn": "2024-05-15T13:53:57.573+0000",
                        "channel": "01369885294383923244",
                        "lastUpdatedOn": "2024-05-21T06:52:30.318+0000",
                        "subject": [
                            "Math"
                        ],
                        "showTimer": "No",
                        "identifier": "do_1140556798981980161688",
                        "gradeLevel": [
                            "Grade 6"
                        ],
                        "compatibilityLevel": 4,
                        "audience": [
                            "Student"
                        ],
                        "se_boards": [
                            "Gujarat Secondary and Higher Secondary Education Board"
                        ],
                        "primaryCategory": "Multiple Choice Question",
                        "se_mediums": [
                            "Hindi"
                        ],
                        "downloadUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556798981980161688/what-is-15-6_1716274350261_do_1140556798981980161688_2.ecar",
                        "se_subjects": [
                            "Math"
                        ],
                        "medium": [
                            "Hindi"
                        ],
                        "interactionTypes": [
                            "choice"
                        ],
                        "framework": "gujaratboardfw",
                        "versionKey": "1715859914934",
                        "mimeType": "application/vnd.sunbird.question",
                        "code": "7dc9bfdf-328e-43f0-1d0a-ed3a626f56fc",
                        "license": "CC BY 4.0",
                        "version": 1,
                        "prevStatus": "Draft",
                        "templateId": "mcq-vertical",
                        "language": [
                            "English"
                        ],
                        "board": "Gujarat Secondary and Higher Secondary Education Board",
                        "showFeedback": "No",
                        "objectType": "Question",
                        "status": "Live",
                        "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                        "contentEncoding": "gzip",
                        "depth": 2,
                        "lastPublishedBy": "6bc1b99e-a1ba-4f34-9faf-c6969befb6e6",
                        "se_gradeLevels": [
                            "Grade 6"
                        ],
                        "se_FWIds": [
                            "gujaratboardfw"
                        ],
                        "allowAnonymousAccess": "Yes",
                        "contentDisposition": "inline",
                        "artifactUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556798981980161688/do_1140556798981980161688_1716187297524.zip",
                        "visibility": "Parent",
                        "qType": "MCQ",
                        "showSolutions": "No",
                        "variants": {
                            "full": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556798981980161688/what-is-15-6_1716274350261_do_1140556798981980161688_2.ecar",
                                "size": "3146"
                            },
                            "online": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556798981980161688/what-is-15-6_1716274350289_do_1140556798981980161688_2_ONLINE.ecar",
                                "size": "1527"
                            }
                        },
                        "index": 1,
                        "pkgVersion": 2
                    },
                    {
                        "copyright": "lifeglobal",
                        "lastStatusChangedOn": "2024-05-21T06:52:30.132+0000",
                        "parent": "do_1140556794050068481686",
                        "author": "Content Creator Pratham",
                        "name": "If you divide 20 cookies among 4 friends equally, how many cookies does each friend get?",
                        "createdOn": "2024-05-15T13:55:07.028+0000",
                        "channel": "01369885294383923244",
                        "lastUpdatedOn": "2024-05-21T06:52:30.132+0000",
                        "subject": [
                            "Math"
                        ],
                        "showTimer": "No",
                        "identifier": "do_1140556804671733761690",
                        "gradeLevel": [
                            "Grade 6"
                        ],
                        "compatibilityLevel": 4,
                        "audience": [
                            "Student"
                        ],
                        "se_boards": [
                            "Gujarat Secondary and Higher Secondary Education Board"
                        ],
                        "primaryCategory": "Multiple Choice Question",
                        "se_mediums": [
                            "Hindi"
                        ],
                        "downloadUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556804671733761690/if-you-divide-20-cookies-among-4-friends-equally-how-many-cookies-does-each-friend-get_1716274350068_do_1140556804671733761690_2.ecar",
                        "se_subjects": [
                            "Math"
                        ],
                        "medium": [
                            "Hindi"
                        ],
                        "interactionTypes": [
                            "choice"
                        ],
                        "framework": "gujaratboardfw",
                        "versionKey": "1715859933574",
                        "mimeType": "application/vnd.sunbird.question",
                        "code": "ca24c8a3-9030-fd7b-f803-67cebf587bae",
                        "license": "CC BY 4.0",
                        "version": 1,
                        "prevStatus": "Draft",
                        "templateId": "mcq-vertical",
                        "language": [
                            "English"
                        ],
                        "board": "Gujarat Secondary and Higher Secondary Education Board",
                        "showFeedback": "No",
                        "objectType": "Question",
                        "status": "Live",
                        "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                        "contentEncoding": "gzip",
                        "depth": 2,
                        "lastPublishedBy": "6bc1b99e-a1ba-4f34-9faf-c6969befb6e6",
                        "se_gradeLevels": [
                            "Grade 6"
                        ],
                        "se_FWIds": [
                            "gujaratboardfw"
                        ],
                        "allowAnonymousAccess": "Yes",
                        "contentDisposition": "inline",
                        "artifactUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556804671733761690/do_1140556804671733761690_1716187297265.zip",
                        "visibility": "Parent",
                        "qType": "MCQ",
                        "showSolutions": "No",
                        "variants": {
                            "full": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556804671733761690/if-you-divide-20-cookies-among-4-friends-equally-how-many-cookies-does-each-friend-get_1716274350068_do_1140556804671733761690_2.ecar",
                                "size": "3250"
                            },
                            "online": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556804671733761690/if-you-divide-20-cookies-among-4-friends-equally-how-many-cookies-does-each-friend-get_1716274350099_do_1140556804671733761690_2_ONLINE.ecar",
                                "size": "1595"
                            }
                        },
                        "index": 2,
                        "pkgVersion": 2
                    },
                    {
                        "copyright": "lifeglobal",
                        "lastStatusChangedOn": "2024-05-21T06:52:29.927+0000",
                        "parent": "do_1140556794050068481686",
                        "author": "Content Creator Pratham",
                        "name": "What is the product of (4 times 4) ?",
                        "createdOn": "2024-05-15T13:56:10.811+0000",
                        "channel": "01369885294383923244",
                        "lastUpdatedOn": "2024-05-21T06:52:29.927+0000",
                        "subject": [
                            "Math"
                        ],
                        "showTimer": "No",
                        "identifier": "do_1140556809896837121692",
                        "gradeLevel": [
                            "Grade 6"
                        ],
                        "compatibilityLevel": 4,
                        "audience": [
                            "Student"
                        ],
                        "se_boards": [
                            "Gujarat Secondary and Higher Secondary Education Board"
                        ],
                        "primaryCategory": "Multiple Choice Question",
                        "se_mediums": [
                            "Hindi"
                        ],
                        "downloadUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556809896837121692/what-is-the-product-of-4-times-4_1716274349824_do_1140556809896837121692_2.ecar",
                        "se_subjects": [
                            "Math"
                        ],
                        "medium": [
                            "Hindi"
                        ],
                        "interactionTypes": [
                            "choice"
                        ],
                        "framework": "gujaratboardfw",
                        "versionKey": "1715859960430",
                        "mimeType": "application/vnd.sunbird.question",
                        "code": "3b33fc50-586a-56af-4c2a-21a7bcbecdd3",
                        "license": "CC BY 4.0",
                        "version": 1,
                        "prevStatus": "Draft",
                        "templateId": "mcq-vertical",
                        "language": [
                            "English"
                        ],
                        "board": "Gujarat Secondary and Higher Secondary Education Board",
                        "showFeedback": "No",
                        "objectType": "Question",
                        "status": "Live",
                        "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
                        "contentEncoding": "gzip",
                        "depth": 2,
                        "lastPublishedBy": "6bc1b99e-a1ba-4f34-9faf-c6969befb6e6",
                        "se_gradeLevels": [
                            "Grade 6"
                        ],
                        "se_FWIds": [
                            "gujaratboardfw"
                        ],
                        "allowAnonymousAccess": "Yes",
                        "contentDisposition": "inline",
                        "artifactUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556809896837121692/do_1140556809896837121692_1716187297022.zip",
                        "visibility": "Parent",
                        "qType": "MCQ",
                        "showSolutions": "No",
                        "variants": {
                            "full": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556809896837121692/what-is-the-product-of-4-times-4_1716274349824_do_1140556809896837121692_2.ecar",
                                "size": "3165"
                            },
                            "online": {
                                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/question/do_1140556809896837121692/what-is-the-product-of-4-times-4_1716274349893_do_1140556809896837121692_2_ONLINE.ecar",
                                "size": "1543"
                            }
                        },
                        "index": 3,
                        "pkgVersion": 2
                    }
                ],
                "name": "Basic Arithmetic Assessment Set 2",
                "navigationMode": "non-linear",
                "createdOn": "2024-05-15T13:52:57.369+0000",
                "channel": "01369885294383923244",
                "generateDIALCodes": "No",
                "lastUpdatedOn": "2024-05-21T06:51:06.664+0000",
                "showTimer": "No",
                "identifier": "do_1140556794050068481686",
                "description": "This question set targets multiplication and division, aiming to evaluate basic competencies in these areas. It includes three multiple-choice questions to measure the understanding and application of multiplication and division in everyday scenarios.\n",
                "containsUserData": "No",
                "allowSkip": "Yes",
                "compatibilityLevel": 5,
                "primaryCategory": "Practice Question Set",
                "setType": "materialised",
                "languageCode": [
                    "en"
                ],
                "attributions": [],
                "versionKey": "1715781177369",
                "mimeType": "application/vnd.sunbird.questionset",
                "code": "79a84aa4-bf0e-a98e-8984-6b2653e83ddf",
                "license": "CC BY 4.0",
                "version": 1,
                "prevStatus": "Draft",
                "showHints": "No",
                "language": [
                    "English"
                ],
                "showFeedback": "No",
                "objectType": "QuestionSet",
                "status": "Live",
                "requiresSubmit": "No",
                "keywords": [
                    "Maths"
                ],
                "shuffle": true,
                "contentEncoding": "gzip",
                "depth": 1,
                "instructions": {
                    "default": "<p>This question set targets multiplication and division, aiming to evaluate basic competencies in these areas. It includes three multiple-choice questions to measure the understanding and application of multiplication and division in everyday scenarios.</p>"
                },
                "allowAnonymousAccess": "Yes",
                "contentDisposition": "inline",
                "visibility": "Parent",
                "showSolutions": "No",
                "index": 2
            }
        ],
        "name": "Arithmetic QuestionSet May 15",
        "navigationMode": "non-linear",
        "createdOn": "2024-05-15T13:36:32.427+0000",
        "createdFor": [
            "01369885294383923244"
        ],
        "channel": "01369885294383923244",
        "pdfUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/questionset/do_1140556713363128321676/do_1140556713363128321676_pdf_1716274350556.pdf",
        "generateDIALCodes": "No",
        "maxScore": 6,
        "lastUpdatedOn": "2024-05-21T06:51:07.517+0000",
        "subject": [
            "Math"
        ],
        "size": 16132,
        "showTimer": "Yes",
        "topicdrop": [
            "Literacy"
        ],
        "identifier": "do_1140556713363128321676.img",
        "description": "test qset",
        "gradeLevel": [
            "Grade 8"
        ],
        "containsUserData": "No",
        "allowSkip": "Yes",
        "compatibilityLevel": 5,
        "audience": [
            "Student"
        ],
        "se_boards": [
            "Maharashtra"
        ],
        "primaryCategory": "Practice Question Set",
        "setType": "materialised",
        "appIcon": "",
        "se_mediums": [
            "English"
        ],
        "downloadUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/questionset/do_1140556713363128321676/arithmetic-questionset-may-15_1716274350454_do_1140556713363128321676_2.ecar",
        "se_subjects": [
            "Math"
        ],
        "lockKey": "c2f04925-b0a7-4f8c-8bf8-41f8fc9248e9",
        "medium": [
            "English"
        ],
        "attributions": [],
        "framework": "gujaratboardfw",
        "versionKey": "1716274267517",
        "mimeType": "application/vnd.sunbird.questionset",
        "code": "27f71ae3-3b7c-148e-a9c4-ce4f3e0b481f",
        "license": "CC BY 4.0",
        "version": 1,
        "prevStatus": "Draft",
        "showHints": "No",
        "summaryType": "Score & Duration",
        "language": [
            "English"
        ],
        "board": "Maharashtra",
        "showFeedback": "Yes",
        "lastPublishedOn": "2024-05-21T06:52:30.370+0000",
        "objectType": "QuestionSetImage",
        "status": "Live",
        "createdBy": "84721b4a-6536-4cb0-b8c3-57583ef4cada",
        "requiresSubmit": "Yes",
        "keywords": [
            "maths"
        ],
        "shuffle": true,
        "contentEncoding": "gzip",
        "depth": 0,
        "consumerId": "9bcfb11f-0e3b-4aba-b5da-e72ee8cfd318",
        "lastPublishedBy": "6bc1b99e-a1ba-4f34-9faf-c6969befb6e6",
        "se_gradeLevels": [
            "Grade 8"
        ],
        "rejectComment": "Need to add program and other fields details",
        "se_FWIds": [
            "gujaratboardfw"
        ],
        "allowAnonymousAccess": "Yes",
        "contentDisposition": "inline",
        "additionalCategories": [],
        "previewUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/questionset/do_1140556713363128321676/do_1140556713363128321676_html_1716274350556.html",
        "childNodes": [
            "do_1140556752940482561679",
            "do_1140556740582932481677",
            "do_1140556763944386561681",
            "do_1140556775792558081684",
            "do_1140556798981980161688",
            "do_1140556794050068481686",
            "do_1140556804671733761690",
            "do_1140556809896837121692"
        ],
        "visibility": "Default",
        "showSolutions": "No",
        "variants": {
            "spine": {
                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/questionset/do_1140556713363128321676/arithmetic-questionset-may-15_1716274350398_do_1140556713363128321676_2_SPINE.ecar",
                "size": "6474"
            },
            "online": {
                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/questionset/do_1140556713363128321676/arithmetic-questionset-may-15_1716274350427_do_1140556713363128321676_2_ONLINE.ecar",
                "size": "6477"
            },
            "full": {
                "ecarUrl": "https://sunbirdsaaspublic.blob.core.windows.net/content/questionset/do_1140556713363128321676/arithmetic-questionset-may-15_1716274350454_do_1140556713363128321676_2.ecar",
                "size": "16132"
            }
        },
        "pkgVersion": 2
      };

  let metadata = sectionContent;
  const playerConfig = {
    context: {
      threshold: 3,
      mode: "play",
      authToken: " ",
      sid: "913b3c6c-2874-26dd-ed0c-c23ddc00b718",
      did: "561c348e631fd225b46a5571cbd42ad1",
      uid: "",
      channel: "01268904781886259221",
      pdata: {
        id: "preprod.diksha.portal",
        ver: "3.3.0",
        pid: "sunbird-portal.contentplayer",
      },
      contextRollup: {
        l1: "string",
        l2: "string",
        l3: "string",
        l4: "string",
      },
      tags: [],
      cdata: [
        {
          id: "c0c9384a82a75f219468d363e1891963",
          type: "ContentSession",
        },
        {
          id: "a12f45a1d7078901adb27b48be4b428d",
          type: "PlaySession",
        },
      ],
      timeDiff: 5,
      objectRollup: {
        l1: "string",
        l2: "string",
        l3: "string",
        l4: "string",
      },
      host: "",
      userData: metadata?.userData ? metadata?.userData : {},
    },
    metadata: metadata,
    config: {
      traceId: "1234",
      sideMenu: {
        enable: false,
        showShare: false,
        showDownload: false,
        showReplay: false,
        showPrint: false,
        showExit: false,
      },
    },
  };

  const sunbirdQumlPlayerRef = useRef(null);
  window.jQuery = $;
  window.questionListUrl = "https://sunbirdsaas.com/api/question/v1/list";

  useEffect(() => {
    const playerElement = sunbirdQumlPlayerRef.current;

    const handleTelemetryEvent = async (event) => {
      console.log("Telemetry Event", event?.detail);
      const data = event?.detail;
      let telemetry = {};

      if (data && typeof data?.data === "string") {
        telemetry = JSON.parse(data.data);
      } else if (data && typeof data === "string") {
        telemetry = JSON.parse(data);
      } else if (data?.eid) {
        telemetry = data;
      }

      if (telemetry?.eid === "ASSESS") {
        const edata = telemetry?.edata;

        if (edata?.resvalues && edata?.resvalues.length > 0) {
        const existingDataIndex = trackData.findIndex(
          (e) => e?.item?.id === edata?.item?.id
        );

        if (existingDataIndex >= 0) {
          trackData[existingDataIndex] = {
            ...edata,
            sectionName: sectionContent?.children?.find(
              (e) => e?.identifier === telemetry?.edata?.item?.sectionId
            )?.name,
          };
        } else {
          trackData.push({
            ...edata,
            sectionName: sectionContent?.children?.find(
              (e) => e?.identifier === telemetry?.edata?.item?.sectionId
            )?.name,
          });
        }
      }
        localStorage.setItem("trackDATA", JSON.stringify(trackData));
      } else if (telemetry?.eid === "END") {
        let originalDuration = event?.detail?.edata?.duration;
        let newDuration = originalDuration / 10;
        let seconds = (newDuration = Math.round(newDuration * 10) / 10);

        localStorage.setItem("totalDuration", seconds);
      }

      const endPageSeen = telemetry?.edata?.extra?.find(
        (item) => item.id === "endpageseen"
      );

      if (endPageSeen && endPageSeen.value === "true" && !apiCalled) {
        apiCalled = true;

        let trackDataOld = localStorage.getItem("trackDATA");
        let trackDataParsed = JSON.parse(trackDataOld);
        let scoreDetails;

        const newFormatData = trackDataParsed.reduce((acc, obj) => {
          const existingSection = acc.find(
            (e) => e.sectionId === obj["item"]["sectionId"]
          );

          if (existingSection) {
            existingSection.data.push(obj);
          } else {
            acc.push({
              sectionId: obj["item"]["sectionId"],
              sectionName: obj["sectionName"] || "",
              data: [obj],
            });
          }
          return acc;
        }, []);

        scoreDetails = JSON.stringify(newFormatData);

        const secondsString = localStorage.getItem("totalDuration");
        const seconds = Number(secondsString);

        try {
          await assessmentTracking(
            scoreDetails,
            identifierWithoutImg,
            maxScore,
            seconds
          );

          setModalOpen(true);
        } catch (error) {
          console.error("Error submitting assessment:", error);
        }
      } else {
        console.log("End page not seen, API call not made.");
      }
    };

    playerElement.addEventListener("telemetryEvent", handleTelemetryEvent);

    return () => {
      playerElement.removeEventListener("telemetryEvent", handleTelemetryEvent);
    };
  }, []);


  return (
    <div className={styles.App}>
      <sunbird-quml-player
        player-config={JSON.stringify(playerConfig)}
        ref={sunbirdQumlPlayerRef}
      ></sunbird-quml-player>
    
    </div>
  );
};

export default qumlPlayer;


