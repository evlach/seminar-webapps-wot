<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html:html lang="en" xml:lang="en">
            <xsl:apply-templates/>
        </html:html>
    </xsl:template>

    <xsl:template match="PERIODIC_TABLE">
        <html:body>
            <xsl:apply-templates/>
        </html:body>
    </xsl:template>

    <xsl:template match="ATOM">
        <html:p class="{@STATE}">
            <xsl:value-of select="NAME" /> -
             State: <xsl:value-of select="@STATE" />
        </html:p>
    </xsl:template>

</xsl:stylesheet>
