<?php
defined('TYPO3') || die('Access denied.');

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Rollovercollection2',
            'Rollovereffect2',
            'rollovereffect2'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('rollovercollection2', 'Configuration/TypoScript', 'CIRCLE');


	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('rollovercollection2', 'setup', '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rollovercollection2/Configuration/TypoScript/setup.ts>"');
