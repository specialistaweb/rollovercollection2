plugin.tx_rollovercollection2_rollovereffect2 {
  view {
    #templateRootPaths = EXT:rollovercollection2/Resources/Private/Templates/
    templateRootPaths = {$plugin.tx_rollovercollection2_rollovereffect2.view.templateRootPath}

    #partialRootPaths = EXT:rollovercollection2/Resources/Private/Partials/
    partialRootPaths = {$plugin.tx_rollovercollection2_rollovereffect2.view.partialRootPath}

    #layoutRootPaths = EXT:rollovercollection2/Resources/Private/Layouts/
    layoutRootPaths = {$plugin.tx_rollovercollection2_rollovereffect2.view.layoutRootPath}
  }
  persistence {
    storagePid = {$plugin.tx_rollovercollection2_rollovereffect2.persistence.storagePid}
    #recursive = 1
  }
  features {
    #skipDefaultArguments = 1
  }
  mvc {
    #callDefaultActionIfActionCantBeResolved = 1
  }
}



# button labels
lib.rollovercollection2.label.readMore = TEXT
lib.rollovercollection2.label.readMore {
  value = MORE
  lang.it= DETTAGLI
}

#
# bootstrap, add alternative and dynamic templates 
#


tt_content.image.partialRootPaths.2650 >
tt_content.image.partialRootPaths {
         2650 = EXT:rollovercollection2/Resources/Private/Partials/ContentElementsv12/
         2650.stdWrap.if {
                value = 2651,2652,2653,2654,2655,2656,2657
                isInList.field = layout
         }
}

tt_content.textmedia.partialRootPaths.2650 >
tt_content.textmedia.partialRootPaths {
         2650 = EXT:rollovercollection2/Resources/Private/Partials/ContentElementsv12/
         2650.stdWrap.if {
                value = 2651,2652,2653,2654,2655,2656,2657
                isInList.field = layout
         }
}

tt_content.media.partialRootPaths.2650 >
tt_content.media.partialRootPaths {
         2650 = EXT:rollovercollection2/Resources/Private/Partials/ContentElementsv12/
         2650.stdWrap.if {
                value =  2651,2652,2653,2654,2655,2656,2657
                isInList.field = layout
         }
}

tt_content.textpic.partialRootPaths.2650 >
tt_content.textpic.partialRootPaths {
         2650 = EXT:rollovercollection2/Resources/Private/Partials/ContentElementsv12/
         2650.stdWrap.if {
                value = 2651,2652,2653,2654,2655,2656,2657
                isInList.field = layout
         }
}



# tt_content settings for raw data output // title
tt_content.image.settings.R2titleRawdataOutput = {$plugin.tx_rollovercollection2_rollovereffect2.settings.titleRawdataOutput}
tt_content.textpic.settings.R2titleRawdataOutput = {$plugin.tx_rollovercollection2_rollovereffect2.settings.titleRawdataOutput}
tt_content.media.settings.R2titleRawdataOutput = {$plugin.tx_rollovercollection2_rollovereffect2.settings.titleRawdataOutput}
tt_content.textmedia.settings.R2titleRawdataOutput = {$plugin.tx_rollovercollection2_rollovereffect2.settings.titleRawdataOutput}

# tt_content settings for raw data output // caption
tt_content.image.settings.R2captionRawdataOutput = {$plugin.tx_rollovercollection2_rollovereffect2.settings.captionRawdataOutput}
tt_content.textpic.settings.R2captionRawdataOutput = {$plugin.tx_rollovercollection2_rollovereffect2.settings.captionRawdataOutput}
tt_content.media.settings.R2captionRawdataOutput = {$plugin.tx_rollovercollection2_rollovereffect2.settings.captionRawdataOutput}
tt_content.textmedia.settings.R2captionRawdataOutput = {$plugin.tx_rollovercollection2_rollovereffect2.settings.captionRawdataOutput}

# tt_content settings for more link
tt_content.image.settings.R2showMoreLink = {$plugin.tx_rollovercollection2_rollovereffect2.settings.showMoreLink}
tt_content.textpic.settings.R2showMoreLink = {$plugin.tx_rollovercollection2_rollovereffect2.settings.showMoreLink}
tt_content.media.settings.R2showMoreLink = {$plugin.tx_rollovercollection2_rollovereffect2.settings.showMoreLink}
tt_content.textmedia.settings.R2showMoreLink = {$plugin.tx_rollovercollection2_rollovereffect2.settings.showMoreLink}


# LESS inclusion
page.includeCSS {
      rollovercollection2 = {$plugin.tx_rollovercollection2_rollovereffect2.view.scssPath}theme.scss
}

