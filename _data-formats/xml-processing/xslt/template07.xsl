<?xml version="1.0" encoding="UTF-8" ?>


<xsl:stylesheet version="1.0" 
xmlns="http://www.w3.org/1999/xhtml"
xmlns:html="http://www.w3.org/1999/xhtml"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html lang="en" xml:lang="en">
        <body>
            <xsl:apply-templates />
        </body>
        </html>
    </xsl:template>

    <xsl:template match="html:meta">
        <p>
            <xsl:value-of select="@content" />
        </p>
    </xsl:template>

</xsl:stylesheet>

